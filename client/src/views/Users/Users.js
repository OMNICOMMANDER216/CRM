import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {
  Label, Input, FormGroup, Card, CardBody, CardHeader, Col, Row, Table,
} from 'reactstrap';
import UserRow from './UserRow';
import * as usersActions from '../../store/actions/usersActions';
import RequireAdmin from '../../helpers/RequireAdmin';

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
    };

    this.setRole = this.setRole.bind(this);
    this.setFilter = this.setFilter.bind(this);
    this.filter = this.filter.bind(this);
  }

  componentWillMount() {
    if (this.props.users !== []) {
      this.props.usersActions.loadUsers();
    }
  }

  setRole(event, user) {
    event.preventDefault();
    const updatedUser = Object.assign({}, user);
    updatedUser.role = event.target.value;
    this.props.usersActions.updateUser(updatedUser);
  }

  setFilter(e) {
    this.setState({ filter: e.target.value });
  }

  filter(users) {
    const { filter } =  this.state;
    if (filter) {
      return users.filter(user => user.role === filter);
    }
    return users;
  }

  render() {
    const { filter } = this.state;
    const { users } = this.props;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader className="d-flex justify-content-between">
                <span>
                  <i className="fa fa-align-justify" />
                  
Users
                </span>
                <FormGroup className="filter-form d-flex  align-items-end">
                  <Label for="developer" className="mr-1">Role</Label>
                  <Input type="select" name="filter" value={filter} onChange={this.setFilter} id="developer">
                    <option value="">Select</option>
                    {
                    ['Bookkeeping', 'Sales', 'Pm', 'DevAdmin', 'Developer', 'Compliance', 'Admin'].map((data, index) => <option key={index} value={data}>{data}</option>)
                      }
                  </Input>
                </FormGroup>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr className="text-center">
                      <th scope="col" className="text-left">name</th>
                      <th scope="col">Role</th>
                      <th scope="col">Customers #</th>
                      <th scope="col">Select Role</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.filter(users).map((user, index) => <UserRow key={index} user={user} setRole={this.setRole} />)}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({}),
  ),
};

Users.defaultProps = {
  users: [],
};

const mapDispatchToProps = dispatch => ({
  usersActions: bindActionCreators(usersActions, dispatch),
});

const mapStateToProps = state => ({
  users: state.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(RequireAdmin(Users));
