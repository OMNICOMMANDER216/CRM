import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import getToken from './getToken';

export default function (ComposedComponent) {
  class Authentication extends Component {
    constructor(props) {
      super(props);

      this.state = {
        loggedIn: false,
      };
    }

    componentWillMount() {
      if (getToken()) {
        this.setState({ loggedIn: true });
      }
    }

    render() {
      if (this.state.loggedIn) {
        return <ComposedComponent {...this.props} />;
      }
      return <Redirect to="/login" />;
    }
  }

  Authentication.propTypes = {
    authenticated: PropTypes.bool.isRequired,
  };

  return Authentication;
}
