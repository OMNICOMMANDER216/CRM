/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Redirect } from "react-router";

export default function(roles, ComposedComponent) {
  class Admin extends Component {
    constructor(props) {
      super(props);

      this.state = {
        redirect: false
      };
    }

    componentWillMount() {
      if (
        this.props.auth.isAuthenticated &&
        !roles.includes(this.props.auth.user.role)
      ) {
        this.setState({ redirect: true });
      }
    }

    render() {
      if (this.state.redirect) {
        return <Redirect to="/dashboard" />;
      }
      return <ComposedComponent {...this.props} />;
    }
  }

  Admin.propTypes = {
    authenticated: PropTypes.bool
  };

  const mapStateToProps = state => ({
    auth: state.auth
  });

  return connect(
    mapStateToProps,
    null
  )(Admin);
}
