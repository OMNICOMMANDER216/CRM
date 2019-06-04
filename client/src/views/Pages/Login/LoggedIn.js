import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import * as authActions from '../../../store/actions/authActions';
import * as usersActions from '../../../store/actions/usersActions';
import * as customersActions from '../../../store/actions/customersActions';
import * as foldersActions from '../../../store/actions/foldersActions';

class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    const { token } = queryString.parse(this.props.location.search);
    const {
      usersActions, customersActions, foldersActions, authActions,
    } = this.props;
    usersActions.loadUsersInit(token);
    customersActions.loadCustomersInit(token);
    foldersActions.loadFoldersToken(token);
    // SetToken(queries.token);
    authActions.login(token).then(() => this.setState({ redirect: true }));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/dashboard" />;
    }
    return null;
  }
}

const mapDispatchToProps = dispatch => ({
  authActions: bindActionCreators(authActions, dispatch),
  usersActions: bindActionCreators(usersActions, dispatch),
  customersActions: bindActionCreators(customersActions, dispatch),
  foldersActions: bindActionCreators(foldersActions, dispatch),
});

export default connect(null, mapDispatchToProps)(LoggedIn);
