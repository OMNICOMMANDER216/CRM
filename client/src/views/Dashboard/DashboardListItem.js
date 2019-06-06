import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

const DashboardListItem = ({ user }) => (
  <div className="m-4 rounded defaultShadow">
    <ListGroup>
      <ListGroupItem active tag="button" action>
        <Link to={`/users/${user._id}`}>
          <span className="mr-2 text-white">{`${user.firstName} ${user.lastName}`}</span>

        </Link>
        <Badge color="secondary" size="lg">{user.customers.length}</Badge>
      </ListGroupItem>
      {user.customers.map(customer => (
        <ListGroupItem key={customer._id} tag="button" action>
          <Link to={`/customers/${customer._id}`}>{customer.name}</Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  </div>
);

DashboardListItem.propTypes = {
  user: PropTypes.shape({}).isRequired,
};

export default DashboardListItem;
