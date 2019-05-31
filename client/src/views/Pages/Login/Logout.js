import React, { Component } from 'react';
import logout from '../../../helpers/removeToken';

export default class Logout extends Component {
  componentWillMount() {
    logout().then(() => this.props.history.push('/login'));
  }

  render() {
    return (
      <div />
    );
  }
}
