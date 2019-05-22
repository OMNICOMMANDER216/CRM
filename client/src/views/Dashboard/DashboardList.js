import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ListItem from './DashboardListItem';

export default class DashboardList extends Component {
  render() {
    const { users } = this.props;
    const pms = users.filter(user => user.role === 'Pm');

    return (
      <Row>
        {pms && pms.map((pm, index) => (
          <Col xs="12" sm="6" lg="4" key={index}>
            <ListItem user={pm} />
          </Col>
        ))
            }
      </Row>
    );
  }
}
