import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import DashboardList from "./DashboardList";
import DashboardDonut from "./DashboardDonut";
import { Card, CardBody, Col, Row, } from 'reactstrap';
import RequireAuth from '../../helpers/RequireAuth';
import { loadUsers } from '../../store/actions/usersActions';
import StoreInit from '../../helpers/initStore';


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownOpen: false,
      radioSelected: 2
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick = (radioSelected) => {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
    const dashboardData = {
      currentMonth : 8,
      monthlyProjection : 21,
      inDev : 45,
      total : 217
    }
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white text-center bg-info p-4">
              <CardBody className="pb-0">
                <div className="text-value">{dashboardData.currentMonth}</div>
                <div>Live this Month</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white text-center bg-primary p-4">
              <CardBody className="pb-0">
                <div className="text-value">{dashboardData.monthlyProjection}</div>
                <div>Projection for Current Month</div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white text-center bg-warning p-4">
              <CardBody className="pb-0">
                <div className="text-value">{dashboardData.inDev}</div>
                <div>Currently in Development </div>
              </CardBody>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white text-center bg-success p-4">
              <CardBody className="pb-0">
                <div className="text-value">{dashboardData.total}</div>
                <div>Total Website Live</div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
            <DashboardDonut dashboardData = {dashboardData}/>
        </Row>
  
        <DashboardList users = {this.props.users} />
      </div>
    );
  }
}

Dashboard.propTypes = {
  users: PropTypes.array
}

const mapDispatchToProps = dispatch => ({
 loadUsers: () => dispatch(loadUsers())
})

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, mapDispatchToProps)(StoreInit(RequireAuth(Dashboard)));
