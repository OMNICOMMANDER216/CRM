import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import { AppAsideToggler } from '@coreui/react';
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Button
} from "reactstrap";
import PropTypes from "prop-types";
import classNames from "classnames";
import {isEmpty} from "lodash";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import TaskApi from '../../api/tasksApi';
import AsideCommentList from './AsideCommentList';

const propTypes = {
  children: PropTypes.node
};

const defaultProps = {};

const styles = {
  button : {
    margin: '2px',
    backgroundColor: '#662c90',
    color: '#FFF'
  }
}

const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}],
      ['link', 'code-block', 'image', 'video'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'code-block','image', 'video'
  ];


class DefaultAside extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: "1",
      text: '',
      editing: false,
      redirect: ""
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  changeHandler = (value) => this.setState({ text: value });

  editHandler = (comment) => {
    this.setState({ text: comment.body, editing: comment._id });
  };

  deleteHandler = (comment) => {
    let task = Object.assign({}, this.props.task);
    task.comments = task.comments.filter(c => c._id !== comment._id);

    TaskApi.updateTask(task).then(res => {
      this.props.updateSideTask(res.data);
      this.setState({editing: ""});
      toast.info('Removed', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000
        });
    })
  };

  saveHandler = () => {
    if(this.state.text) {
      let task = Object.assign({}, this.props.task);
      const comment = {
        author: this.props.currentUser._id,
        body: this.state.text
      }

      if(this.state.editing) {
        task.comments = task.comments.filter(c => c._id !== this.state.editing);
      }

      task.comments.push(comment);
      TaskApi.updateTask(task).then(res => {
        this.props.updateSideTask(res.data);
        this.setState({editing: "", text: ""});
        toast.info('Saved', {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 2000
        });
      })
      }
  };


  render() {
    // eslint-disable-next-line
    const { children, ...attributes } = this.props;
    const task = Object.assign({}, this.props.task);
    return (
      <Fragment>
      <ToastContainer autoClose={2000}/>
        <Nav tabs>
        
          <NavItem>
            <NavLink>
              <AppAsideToggler 
                className="d-md-down-none" >
                <i  onClick={() => this.props.setSideTask({})} className="fa fa-close"></i>
              </AppAsideToggler>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "1" })}
              onClick={() => {
                this.toggle("1");
              }}
            >
              <i className="icon-list" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "2" })}
              onClick={() => {
                this.toggle("2");
              }}
            >
              <i className="icon-pencil" />
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classNames({ active: this.state.activeTab === "3" })}
              onClick={() => {
                this.toggle("3");
              }}
            >
              <i className="icon-settings" />
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab} className='sideTabContent'>
          <TabPane tabId="1">
            {!isEmpty(task) && (
              <Fragment>
              <ReactQuill 
                  theme="snow"
                  modules={modules}
                  formats={formats}
                  value={this.state.text}
                  onChange={this.changeHandler} >
                  </ReactQuill>
                  <Button onClick={this.saveHandler} className="oc-btn" style={styles.button}> Submit </Button>
                  <hr />
              <h2 className="text-center">{task.column[0].value}</h2>
                  <hr />
                  {
                    <AsideCommentList 
                      comments={task.comments} 
                      editHandler={this.editHandler} 
                      deleteHandler={this.deleteHandler} 
                      currentUser={this.props.currentUser} 
                      users={this.props.users}/>
                  }
              </Fragment>
            )}
          </TabPane>
          <TabPane tabId="2" className="p-3">
            
          </TabPane>
          <TabPane tabId="3" className="p-3">
            
          </TabPane>
        </TabContent>
      </Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

const mapStateToProps = state => ({
  currentUser: state.auth.user,
  users: state.users
});

export default connect(
  mapStateToProps,
  null
)(DefaultAside);
