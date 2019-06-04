import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
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
        if (!this.props.users.length) {
          this.props.userActions.loadUsers();
        }
        if (!this.props.customers.length) {
          this.props.customerActions.loadCustomers();
        }
        if (!this.props.foldersActions.length) {
          this.props.foldersActions.loadFolders();
        }
      }
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  StoreInit.propTypes = {
    authenticated: PropTypes.bool,
  };

  function mapStateToProps(state, ownProps) {
    return {
      auth: state.auth,
      customers: state.customers,
      users: state.users,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      userActions: bindActionCreators(userActions, dispatch),
      customerActions: bindActionCreators(customerActions, dispatch),
      authActions: bindActionCreators(authActions, dispatch),
      foldersActions: bindActionCreators(foldersActions, dispatch),
    };
  }

  return connect(mapStateToProps, mapDispatchToProps)(StoreInit);
}
