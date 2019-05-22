import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default ({ user }) => (
  <div className="m-4">
    <ListGroup>
      <ListGroupItem active tag="button" action>
        {`${user.firstName} ${user.lastName}`}
        {' '}
        <Badge color="secondary" size="lg">{user.customers.length}</Badge>
      </ListGroupItem>
      {user.customers.map((customer, index) => <ListGroupItem key={index} tag="button" action><Link to={`/customers/${customer._id}`}>{customer.name}</Link></ListGroupItem>)}
    </ListGroup>
  </div>
);
