import React, { Component, Fragment, Suspense } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router";
import { ToastContainer, toast } from 'react-toastify';
import { AppAside, } from '@coreui/react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import { validateAll } from "indicative";
import moment from "moment";
import boardsApi from "../../../api/boardsApi";
import TaskApi from "../../../api/tasksApi";
import * as foldersActions from "../../../store/actions/foldersActions";
import * as sideTaskActions from "../../../store/actions/sideTask";
import Group from "./Group/Group";
import { isEmpty} from "lodash";

const Modal = React.lazy(() => import("./Modal"));
const DefaultAside = React.lazy(() => import('../../../containers/DefaultLayout/DefaultAside'));

class Board extends Component {
  constructor(props) {
    super(props);

    this.state = {
      board: {},
      modalColumn: {},
      newTask: "",
      sideTask: {},
      editing: {},
      dropdownOpen: false,
      disabled: "",
      formData: {},
      errors: {},
      redirect: false
    };
  }
  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  componentDidMount() {
    const id = this.props.match.params.id;
    boardsApi.loadBoardById(id).then(res => {
      const board = res.data;
      this.setState({ board });
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      boardsApi.loadBoardById(this.props.match.params.id).then(res => {
        const board = res.data;
        this.setState({ board });
      });
    }
  }

  saveColumn = () => {
    const column = Object.assign({}, this.state.modalColumn);
    let board = Object.assign({}, this.state.board);
    board.columns.push(column);

    const rules = {
      title: "required|string",
      type: "required|string"
    };

    validateAll(column, rules)
      .then(() => {
        boardsApi
          .addBoardColumn(board)
          .then(res => this.setState({ board: res.data }));

        // reset inpput
        const newTask = { column: [] };
        this.setState({ newTask });
      })
      .catch(errors => {
        let formattedErrors = {};
        errors.forEach(error => (formattedErrors[error.field] = error.message));
        this.setState({ errors: formattedErrors });
      });
    this.setState({ modalColumn: {} });
  };

  editColumn = id => {
    this.setState(prevState => {
      return {
        modalColumn: prevState.columns.find(column => column._id === id)
      };
    });
  };

  changeHandler = (e, id) => {
    /*************************************/
    //  id: group id
    // name: array index for the task column
    /*************************************/
    if (isEmpty(this.state.editing)) {
      this.setState({ newTask: e.target.value });
    } else {
      let editing = Object.assign({}, this.state.editing);
      editing.column[e.target.name].value = e.target.value;
      this.setState({ editing });
    }
  };

  saveHandler = group_id => {
    // Create new task
    if (this.state.editing._id) {
      const board = Object.assign({}, this.state.board);
      const updatedTask = Object.assign({}, this.state.editing);
      TaskApi.updateTask(updatedTask).then(res => {
        // this.props.sideTaskActions.setSideTask({});
        let selectedGroup = board.groups.find(
          group => group._id === res.data.group
        );
        selectedGroup.tasks = [
          ...selectedGroup.tasks.filter(task => task._id !== res.data._id),
          res.data
        ];
        board.groups = [
          ...board.groups.filter(g => g._id !== selectedGroup._id),
          selectedGroup
        ].sort((group1, group2) => group1._id.localeCompare(group2._id));
        this.setState({ board, editing: {} });
      });
    } else if(this.state.newTask) {
      const board = Object.assign({}, this.state.board);
      let task = {};

      task.group = group_id;
      task.board = this.state.board._id;
      task.column = [];
      // Set Task columns Types
      board.columns.forEach((col, index) => {
        task.column[index] = {};
        task.column[index].dataType = col.type;
        task.column[index].colRef = col._id;
      });
      task.column[0].value = this.state.newTask;

      // Update Group Board
      TaskApi.createTask(task).then(res => {
        let selectedGroup = board.groups.find(
          group => group._id === res.data.group
        );
        selectedGroup.tasks.push(res.data);
        board.groups = [
          ...board.groups.filter(g => g._id !== selectedGroup._id),
          selectedGroup
        ].sort((group1, group2) => group1._id.localeCompare(group2._id));
        this.setState({ board });
        toast.info('Task Created', {
          position: toast.POSITION.TOP_CENTER
        });
      });
    }

    // Disable forms
    this.setState(prevState => ({ disabled: !prevState.disabled }));
  };

  isEditingHandler = task => {
    this.props.sideTaskActions.setSideTask(undefined);
    this.setState({
      editing: Object.assign({}, task),
      disabled: "",
      newTask: task,
      sideTask: {}
    });
  };

  editHandler = (e, group_id) => {
    this.setState({ disabled: group_id, editing: {} });
  };

  boardDeleteHandler = () => {
    this.props.foldersActions.deleteBoard(this.state.board);
    this.setState({ redirect: true });
  };

  columnHandler = e => {
    let column = Object.assign({}, this.state.modalColumn);
    column[e.target.name] = e.target.value;

    this.setState({ modalColumn: column });
  };

  editColumn = id => {
    this.setState(prevState => ({
      modalColumn: prevState.columns.find(column => column._id === id)
    }));
  };

  removeColumnHandler = id => {
    const data = {
      board: this.state.board,
      columnId: id
    }

    boardsApi.removeBoardColumn(data).then(res => {
      this.setState({board: res.data});
    })
  };

  toggle = () => {
    this.setState(prevState => ({ dropdownOpen: !prevState.dropdownOpen }));
  };

  openModal = () => {
    let column = {
      title: "",
      type: ""
    };
    this.setState({ modalColumn: column });
  };

  closeModal = () => {
    this.setState({ modalColumn: {} });
  };

  moveBoard = folderId => {
    this.props.foldersActions.moveBoard(this.state.board, folderId);
  };
  /*******************TASK***********************************/
  updateSideTask = task => {
    const board = Object.assign({}, this.state.board);
    let group = board.groups.find(g => g._id === task.group);
    group.tasks = [...group.tasks.filter(t => t._id !== task._id), task];
    board.groups = [...board.groups.filter(g => g._id !== group._id), group].sort((group1, group2) => group1._id.localeCompare(group2._id));
    this.setState({ board, sideTask: task })
  };
  
  setSideTask = task => {
    if (!isEmpty(this.state.sideTask) && (this.state.sideTask._id ===  task._id)) {
      this.setState({ sideTask: {} });
    } else {
      this.setState({ sideTask: task });
    }
  };

  removeTask = task => {
    TaskApi.deleteTaskById(task._id)
      .then(data => {
        if(data.success) {
          let board = Object.assign({}, this.state.board);
          let selectedGroup = board.groups.find(
          group => group._id === task.group
        );
        selectedGroup.tasks = selectedGroup.tasks.filter(t => t._id !== task._id);
        board.groups = [
          ...board.groups.filter(g => g._id !== selectedGroup._id),
          selectedGroup
        ].sort((group1, group2) => group1._id.localeCompare(group2._id));
        this.setState({ board });
         toast.info("Task Removed !", {
            position: toast.POSITION.TOP_CENTER
          });
        }
      })
  }
  /*******************TASK***********************************/

  momentFormat(date) {
    return moment(date).format("MMM Do YY");
  }

  render() {
    const { board, sideTask, newTask, editing, disabled } = this.state;
    const groups =
      board.groups &&
      board.groups.map((group, id) => (
        <Group
          key={id}
          group={group}
          columns={board.columns}
          users={this.props.users}
          boardId={board._id}
          newTask={newTask}
          sideTask={sideTask}
          changeHandler={e => this.changeHandler(e, group._id)}
          saveHandler={e => this.saveHandler(group._id)}
          editHandler={e => this.editHandler(e, group._id)}
          isEditingHandler={this.isEditingHandler}
          editActive={editing}
          setSideTask={this.setSideTask}
          removeTask={this.removeTask}
          removeColumnHandler = {this.removeColumnHandler}
          disabled={disabled}
        />
      ));

    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <Fragment>
      <ToastContainer />
      <div className="animated fadeIn">
        <h2>
          {board.name}
          <Link
            className="pl-1"
            to={{
              pathname: `/editBoard/${board.folder}`,
              state: { boardId: board._id }
            }}
          >
            <i className="fa fa-pencil" />
          </Link>
          <button className="fa-btn" onClick={this.boardDeleteHandler}>
            <i className="fa fa-trash" />
          </button>
          <button className="fa-btn" onClick={this.openModal}>
            <i className="fa fa-plus-circle" />
          </button>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle caret> Move board to</DropdownToggle>
            <DropdownMenu>
              <DropdownItem divider />
              {this.props.folders.map(folder => (
                <DropdownItem
                  key={folder._id}
                  onClick={e => this.moveBoard(folder._id)}
                >
                  {" "}
                  {folder.name}{" "}
                </DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </h2>
        {groups}
        {/* Modal */}
        <Modal
          modalColumn={this.state.modalColumn}
          closeModal={this.closeModal}
          saveColumn={this.saveColumn}
          columnHandler={this.columnHandler}
          errors={this.state.errors}
        />
        <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside task={this.state.sideTask} updateSideTask={this.updateSideTask} setSideTask={this.setSideTask}/>
            </Suspense>
          </AppAside>
      </div>
      </Fragment>
    );
  }
}

let mapStateToProps = state => ({
  groups: state.groups,
  currentUser: state.auth.user,
  users: state.users,
  folders: state.folders,
  sideTask: {...state.sideTask[0]}
});

let mapDispatchToProps = dispatch => ({
  foldersActions: bindActionCreators(foldersActions, dispatch),
  sideTaskActions: bindActionCreators(sideTaskActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Board);
