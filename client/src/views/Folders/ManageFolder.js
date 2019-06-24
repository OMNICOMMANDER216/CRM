import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateAll } from 'indicative';
import * as foldersActions from '../../store/actions/foldersActions';
import { Input, Badge, Col, Button } from 'reactstrap';
import ReactTooltip from 'react-tooltip';
import requireRole from '../../helpers/RequireRole';

class ManageFolder extends React.Component { 
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: {},
    };
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.folder && (this.props.folder._id !== nextProps.folder._id)) {
      // necessary to populate form when existing user is loaded directly.
      this.setState({ folder: Object.assign({}, nextProps.folder) });
    }
  }

  doubleClickHandler = (folder) => { 
    this.setState({editing: folder});
  }

  changeHandler = (e) => { 
    let editing = Object.assign({}, this.state.editing);
    editing.name = e.target.value;
    this.setState({editing});
  }

  removeHandler = (folder) => { 
    this.props.foldersActions.removeFolder(folder);
  }

  saveHandler = (event) => {
    event.preventDefault();

    let folder = Object.assign({}, this.state.editing);
    // Set Axios header
      const rules = {
        name: 'required|string',
        // customer: 'required|string'
      };

      validateAll(folder, rules)
        .then(() => {
              if(folder._id) {
                this.props.foldersActions
                  .updateFolder(folder);
                  this.setState({editing: {}});
              } else {
                this.props.foldersActions.addFolder(folder);
                this.setState({editing: {}});
              }
        })
        .catch(errors => {  
          console.log(errors);
          let formattedErrors = {};
          errors.forEach(error => formattedErrors[error.field] = error.message);
          this.setState({errors: formattedErrors});
        });
     
  }

  
  render() {
    const { folders } = this.props;
    const { editing } = this.state;
    return (    
      <Fragment>
      { folders.map(f => (
       <Col key={f._id} className="d-flex" style={styles.item} onDoubleClick={() => this.doubleClickHandler(f)}>

        <Input 
          type="text" 
          style={styles.input}
          value={(f._id === editing._id) ? editing.name :  f.name} 
          disabled = {f._id !== editing._id}
          onChange = {this.changeHandler}
          onBlur={this.saveHandler}
          onKeyDown={e => (e.keyCode === 13) && this.saveHandler(e)}
          /> 
        <Badge style={styles.badge}color="primary">{f.boards.length}</Badge>
        <Button 
          type="button" 
          style={styles.deleteButton}
          onClick={() => window.confirm('Are yo sure ?') && this.removeHandler(f)}>
          <i  className="fa fa-trash fa-lg text-danger" data-tip="Remove"/>
        </Button>
        </Col>
      ))}
        <Col className="d-flex" style={styles.item} >
          <Input 
            style={styles.input} 
            value={(!!editing._id) ? "" :  editing.name}  
            onChange = {this.changeHandler}
            placeholder="Add New Folder" 
            onKeyDown={e => (e.keyCode === 13) && this.saveHandler(e)}
          />
        </Col>
        <ReactTooltip />
      </Fragment>
    );
  }
}
ManageFolder.propTypes = {

};

const styles = {
  input: {
    padding: '20px 10px',
    fontSize: '1.3em'
  },
  badge: {
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize:'1.5em'
  },

  item : {
    margin: '1em'
  },

  deleteButton: {
    marginLeft: '10px',
    fontSize: '22px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
}

const mapStateToProps = (state) => ({
  folders: state.folders, 
  customers: state.customers,
  currentUser: state.auth.user
});

function mapDispatchToProps(dispatch) {
  return {
    foldersActions: bindActionCreators(foldersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(requireRole(['Admin'],ManageFolder));
