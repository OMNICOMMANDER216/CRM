import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import * as authActions from '../../../store/actions/authActions';
import * as usersActions from '../../../store/actions/usersActions';
import * as customersActions from '../../../store/actions/customersActions';

class LoggedIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: false
    };
  }
    
    componentWillMount() {
        const token = queryString.parse(this.props.location.search).token;
        this.props.usersActions.loadUsersInit(token);
        this.props.customersActions.loadCustomersInit(token);
        this.props.authActions.login(token).then(() => this.setState({redirect: true}));
        // SetToken(queries.token);
    }
  render() {
    if(this.state.redirect) {
      return <Redirect to="/dashboard" />
    }
    return null;
  }
}

const mapDispatchToProps = (dispatch) => ({
    authActions : bindActionCreators(authActions, dispatch),
    usersActions : bindActionCreators(usersActions, dispatch),
    customersActions : bindActionCreators(customersActions, dispatch),
});

export default  connect(null, mapDispatchToProps)(LoggedIn);