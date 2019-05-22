import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import ListItem from './DashboardListItem';

const DashboardList = (props) => {
  const { users } = props;
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
};

DashboardList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default DashboardList;
