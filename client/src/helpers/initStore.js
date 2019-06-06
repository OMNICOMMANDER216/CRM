import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import  * as customerActions from '../store/actions/customersActions';
import  * as userActions from '../store/actions/usersActions';
import  * as authActions from '../store/actions/authActions';
import  * as foldersActions from '../store/actions/foldersActions';
import getToken from './getToken';

export default function (ComposedComponent) {
  class StoreInit extends Component {
    componentWillMount() {
      if (!this.props.auth.isAuthenticated) {
        this.props.authActions.initAuth();
      }
      if (getToken()) {
        const { users, customers, folders } = this.props;
        isEmpty(users) && this.props.userActions.loadUsers();
        isEmpty(customers) && this.props.customerActions.loadCustomers();
        isEmpty(folders) && this.props.folderActions.loadFolders();
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  StoreInit.propTypes = {
    auth: PropTypes.shape({
      isAuthenticated: PropTypes.bool,
    }).isRequired,
    customers: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,

    users: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,

    folders: PropTypes.arrayOf(
      PropTypes.shape({}),
    ).isRequired,

    customerActions: PropTypes.shape({}).isRequired,
    userActions: PropTypes.shape({}).isRequired,
    folderActions: PropTypes.shape({}).isRequired,
  };

  function mapStateToProps(state) {
    return {
      auth: state.auth,
      customers: state.customers,
      users: state.users,
      folders: state.folders,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      userActions: bindActionCreators(userActions, dispatch),
      customerActions: bindActionCreators(customerActions, dispatch),
      authActions: bindActionCreators(authActions, dispatch),
      folderActions: bindActionCreators(foldersActions, dispatch),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(StoreInit);
}
