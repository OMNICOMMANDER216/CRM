import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Redirect } from 'react-router-dom';
import BoardForm from './Board/BoardForm';
import BoardModel from './Board/BoardModel';
import { validateAll } from 'indicative';
import * as foldersActions from '../../store/actions/foldersActions';
import BoardApi from '../../api/boardsApi';

class ManageBoardPage extends React.Component { 
  constructor(props, context) {
    super(props, context);
    this.state = {
      folder: Object.assign({}, this.props.folder),
      board: {},
      selectedCustomer : {},
      errors: {},
      saving: false,
      disabledAdvance: false,
      disabledLive: false,
      redirect: false,
      redirectBoardId: "",
      assign: false
    };
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.folder && (this.props.folder._id !== nextProps.folder._id)) {
      // necessary to populate form when existing user is loaded directly.
      this.setState({ folder: Object.assign({}, nextProps.folder) });
    }
  }
  
   componentWillMount() {

     if(this.props.location.state && this.props.location.state.boardId) {
       const id = this.props.location.state.boardId;
        BoardApi.loadBoardById(id)
        .then(res => {
            const board = res.data;
            const selectedCustomer = board.customer ? {value: board.customer, label: this.props.customers.length && this.props.customers.find(cust => cust._id === board.customer).name} : {value: "", label: 'Select'};
            this.setState({board, selectedCustomer});
        });
     } else {
        this.setState({board: BoardModel});
     }
    }

    componentDidMount() {
        this.setState({ users: this.props.users });
    }

  updateBoard = (e) => { 
    let board = Object.assign({}, this.state.board);
      board[e.target.name] = e.target.value
    return this.setState({ board: board });
  }

  updateCustomer = (e) => { 
    let selectedCustomer = Object.assign({}, this.state.selectedCustomer);
    let board = Object.assign({}, this.state.board);
    board.customer = e.value;
    selectedCustomer = e;
    return this.setState({ selectedCustomer, board });
  }

  saveBoard = (event) => {
    event.preventDefault();

    let board = Object.assign({}, this.state.board);
    // Set Axios header
      const rules = {
        name: 'required|string',
        // customer: 'required|string'
      };

      validateAll(board, rules)
        .then(() => {
              board.folder = this.state.folder._id;
              this.setState({ saving: true });
              !board._id && this.props.foldersActions.addBoard(board)
                .then(res => {
                  this.props.foldersActions.addBoardSuccess(res.data);
                  this.setState({ redirectBoardId: res.createdBoardId, redirect: true });
                  });
                if(board._id) {
                   this.props.foldersActions.updateBoard(board);
                  this.setState({ redirectBoardId: board._id, redirect: true });
                } 
                
        })
        .catch(errors => {  
          console.log(errors);
          let formattedErrors = {};
          errors.forEach(error => formattedErrors[error.field] = error.message);
          this.setState({errors: formattedErrors});
        });
     
  }

  redirect = () => {
    if(this.state.board._id) {
      this.setState({redirectBoardId: this.state.board._id, redirect: true});
    } else {
      this.setState({redirect: true});
    }
  }
  
  render() {
    if(this.state.redirect) {
      return <Redirect to={`/board/${this.state.redirectBoardId}`} />
    }
    return (    
        <BoardForm 
        folder={this.props.folder}
        board={this.state.board}
        selectedCustomer={this.state.selectedCustomer}
        customers={this.props.customers}
        onSave={this.saveBoard}
        onChange={this.updateBoard}
        updateCustomer={this.updateCustomer}
        errors={this.state.errors}
        saving={this.state.saving}
        redirect={this.redirect}
        currentUser={this.props.currentUser}
      /> 
    );
  }
}
ManageBoardPage.propTypes = {

};

const mapStateToProps = (state, ownprops) => ({
  folder: state.folders.find(folder => folder._id === ownprops.match.params.folder_id),
  folders: state.folders, 
  customers: state.customers,
  currentUser: state.auth.user
});

function mapDispatchToProps(dispatch) {
  return {
    foldersActions: bindActionCreators(foldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageBoardPage);
