/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';
import logo from '../../assets/img/brand/oc-logo.png';
import profile from '../../assets/img/profile.png';
import sygnet from '../../assets/img/brand/oc-star.svg';

import getCurrentUser from '../../helpers/getCurrentUser';

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
  render() {
    const isAdmin = this.props.currentUser && this.props.currentUser.role === 'Admin';

    // eslint-disable-next-line
    const { children, currentUser } = this.props;

    const unopenNotification = (currentUser
        && !!currentUser.notifications[0]
        && currentUser.notifications.filter(el => !el.isRead))
      || [];

    return (
      <React.Fragment>
        <AppSidebarToggler className="d-lg-none" display="md" mobile />
        <AppNavbarBrand
          full={{
            src: logo,
            width: 100,
            height: 45,
            alt: 'OMNICOMMANDER Logo',
          }}
          minimized={{
            src: sygnet,
            width: 30,
            height: 30,
            alt: 'CoreUI Logo',
          }}
        />
        {' '}
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/"> Dashboard </NavLink>
            {' '}
          </NavItem>
          {' '}
          <NavItem className="px-3">
            <Link to="/customers"> Customers </Link>
            {' '}
          </NavItem>
          {' '}
          {isAdmin && (
            <NavItem className="px-3">
              <Link to="/users"> Users </Link>
              {' '}
            </NavItem>
          )}
          {' '}
        </Nav>
        {' '}
        {this.props.currentUser && (
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none">
              <NavLink href="/notification">
                <i className="icon-bell" />
                <Badge pill color="danger">
                  {' '}
                  {unopenNotification.length}
                  {' '}
                </Badge>
                {' '}
              </NavLink>
              {' '}
            </NavItem>
            {' '}
            <AppHeaderDropdown direction="down">
              <DropdownToggle nav>
                <img
                  src={this.props.currentUser.image || profile}
                  className="img-avatar"
                  alt="User avatar"
                />
              </DropdownToggle>
              {' '}
              <DropdownMenu
                right
                style={{
                  right: 'auto',
                }}
              >
                <DropdownItem header tag="div" className="text-center">
                  {' '}
                  <strong> Account </strong>
                </DropdownItem>
                <DropdownItem>
                  <Link to={`/users/${this.props.currentUser._id}`}>
                    <i className="fa fa-user"> </i>
                    {' '}
Profile
                    {' '}
                  </Link>
                </DropdownItem>
                {' '}
                <DropdownItem divider />
                <DropdownItem onClick={e => this.props.onLogout(e)}>
                  <i className="fa fa-lock" />
                  {' '}
Logout
                  {' '}
                </DropdownItem>
                {' '}
              </DropdownMenu>
              {' '}
            </AppHeaderDropdown>
            {' '}
          </Nav>
        )}
        {' '}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

function mapStateToProps(state) {
  return {
    currentUser: state.users.find(user => user._id === getCurrentUser()._id),
  };
}

export default connect(
  mapStateToProps,
  null,
)(DefaultHeader);
