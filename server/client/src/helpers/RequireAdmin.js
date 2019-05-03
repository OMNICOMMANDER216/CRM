import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

export default function (ComposedComponent) {
  class Admin extends Component {
    constructor(props) {
      super(props);

      this.state = {
        redirect: false
      };
    }

    componentWillMount () {
      if(this.props.auth.isAuthenticated && (this.props.auth.user.role !== "Admin")) {
          this.setState({redirect: true});
      }
    }
    render() {
      if(this.state.redirect) {
        return <Redirect to='/dashboard' />;
      } 
      return <ComposedComponent  {...this.props} />;
    }
  }

  Admin.propTypes = {
    authenticated: PropTypes.bool
  };

  const mapStateToProps = (state) => ({
      auth: state.auth   
  });

  return connect(mapStateToProps, null)(Admin);
}