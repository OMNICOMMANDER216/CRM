/* eslint-disable react/prefer-stateless-function */
/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
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
import { isEmpty } from 'lodash';

import {
  AppHeaderDropdown,
  AppNavbarBrand,
  AppSidebarToggler,
} from '@coreui/react';
import logo from '../../assets/img/brand/oc-logo.png';
import profile from '../../assets/img/profile.png';
import sygnet from '../../assets/img/brand/oc-star.svg';


class DefaultHeader extends Component {
  render() {
    // eslint-disable-next-line

    const { currentUser, onLogout } = this.props;

    const isAdmin = currentUser && currentUser.role === 'Admin';

    const unopenNotification = (!isEmpty(currentUser)
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
        <AppSidebarToggler className="d-md-down-none" display="lg" />
        <Nav className="d-md-down-none" navbar>
          <NavItem className="px-3">
            <NavLink href="/"> Dashboard </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <Link to="/customers"> Customers </Link>
          </NavItem>
          {isAdmin && (
            <NavItem className="px-3">
              <Link to="/users"> Users </Link>
            </NavItem>
          )}
        </Nav>
        {currentUser && (
          <Nav className="ml-auto" navbar>
            <NavItem className="d-md-down-none" data-tip="Messages">
              <NavLink href="/notification">
                <i className="icon-bell" />
                <Badge pill color="danger">
                  {unopenNotification.length}
                </Badge>
              </NavLink>
            </NavItem>
            <AppHeaderDropdown direction="down">
              <DropdownToggle nav>
                <img
                  src={currentUser.image || profile}
                  className="img-avatar"
                  alt="User avatar"
                />
              </DropdownToggle>
              <DropdownMenu
                right
                style={{
                  right: 'auto',
                }}
              >
                <DropdownItem header tag="div" className="text-center">
                  <strong> Account </strong>
                </DropdownItem>
                <DropdownItem>
                  <Link to={`/users/${currentUser._id}`}>
                    <i className="fa fa-user"> </i>
Profile
                  </Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem onClick={e => onLogout(e)}>
                  <i className="fa fa-lock" />
Logout
                </DropdownItem>
              </DropdownMenu>
            </AppHeaderDropdown>
            <ReactTooltip />
          </Nav>
        )}
      </React.Fragment>
    );
  }
}

DefaultHeader.propTypes = {
  currentUser: PropTypes.shape({
    _id: PropTypes.string,
    notifications: PropTypes.array,
  }),
  onLogout: PropTypes.func.isRequired,
};

DefaultHeader.defaultProps = {
  currentUser: {},
};

export default DefaultHeader;
