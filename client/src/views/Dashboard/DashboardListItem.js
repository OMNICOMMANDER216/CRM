import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup, ListGroupItem, Badge } from 'reactstrap';

export default ({ user }) => (
  <div className="m-4 rounded defaultShadow">
    <ListGroup>
      <ListGroupItem active tag="button" action>
        <span className="mr-2">{`${user.firstName} ${user.lastName}`}</span>
        <Badge color="secondary" size="lg">{user.customers.length}</Badge>
      </ListGroupItem>
      {user.customers.map((customer, index) => <ListGroupItem key={index} tag="button" action><Link to={`/customers/${customer._id}`}>{customer.name}</Link></ListGroupItem>)}
    </ListGroup>
  </div>
);
