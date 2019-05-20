import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Badge, Card, CardImg, CardBody, CardHeader,  ListGroup, ListGroupItem, Col, Row, Table } from 'reactstrap';
import getBadge from '../../helpers/getBadge';

class User extends Component {

  render() {
    const {user} = this.props;

    return (
      <div className="animated fadeIn">
        <Row>
          <Col className="d-flex justify-content-center" lg={3}>
            {user && 
            <Card>
              <CardHeader>
                  <CardImg top width="20%" src={user.image} aria-label="User Profile Picture" alt="User Profile"/>
              </CardHeader>
              <CardBody>
                <ListGroup flush>
                    <ListGroupItem  tag="a" href="#"><strong>Name:</strong> {`${user.firstName} ${user.lastName}`}</ListGroupItem>
                    <ListGroupItem  tag="a" href="#"><strong>Role:</strong> {user.role}</ListGroupItem>
                    <ListGroupItem  tag="a" href="#"><strong>Number of Projects: </strong> {user.customers && user.customers.length}</ListGroupItem>
                </ListGroup>
              </CardBody>
            </Card>
            }
            </Col>
          <Col lg={9}>
            <Card>
              <CardHeader><h2 className="text-center"> List of Projects</h2></CardHeader>
              <CardBody>
                  <Table responsive hover>
                  <thead>
                  <tr className="text-center">
                    <td>#</td>
                    <td>Name</td>
                    <td>Status</td>
                    <td>View</td>
                  </tr>
                  </thead>
                    <tbody>
                    {
                      (user && user.customers) && user.customers.map((customer, index) => {
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td><Badge color={getBadge(customer.status)}>{customer.status}</Badge></td>
                            <td><Link to={`/customers/${customer._id}`}><i className="fa fa-eye"></i></Link></td>
                          </tr>
                        )
                      })
                    }
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  user : state.users.find(user => user._id === ownProps.match.params.id)
})

export default connect(mapStateToProps, null)(User);
