import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Redirect } from 'react-router-dom';
import { Card, CardBody, CardHeader,Table, Col, Row, Input} from 'reactstrap';
import * as customersActions from '../../store/actions/customersActions';
import CustomerRow from "./CustomerRow";
import { Link } from 'react-router-dom';
import StoreInit from '../../helpers/initStore';
class Customers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };
  }

  deleteCustomer = (event, id) => {
    event.preventDefault();
    this.props.customersActions.deleteCustomer(id);
    
  }

  search = (e) => {
    this.setState({search: e.target.value.toLowerCase()});
  }

  render() {
    const isAdmin = this.props.currentUser.role === "Admin";
    const isBookkeeping = this.props.currentUser.role === "Bookkeeping";
    let {customers} = this.props;
    customers = customers.filter(customer => customer.name.toLowerCase().includes(this.state.search));
    if(this.state.redirect) {
       return <Redirect to='/customers' />
    } else if(!customers) {
      return 
    } else {
      return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
              <Row>
                <Col xs="4">
                  <i className="fa fa-align-justify"></i> Customers 
                </Col>
                <Col xs="4">
                  <Input name="search" value={this.state.search} onChange={this.search} placeholder="Search"/>
                </Col>
                {(isAdmin || isBookkeeping) &&
                <Col xs="4" className="d-flex justify-content-end">
                <button className="oc-btn" ><Link to="/customer/add">Add New Customer</Link></button>
                </Col>
                }
                </Row>
              </CardHeader>
              <CardBody>
                <Table responsive hover >
                  <thead>
                    <tr>
                      <th scope="col">Name</th>
                      <th scope="col">Url</th>
                      <th scope="col">Services</th>
                      <th scope="col">Status</th>
                      <th scope="col" className="text-center">View</th>
                      {(isAdmin || isBookkeeping) && <th scope="col" className="text-center">Edit</th>}
                      {(isAdmin ) &&<th scope="col" className="text-center">Remove</th> }
                    </tr>
                  </thead>
                  <tbody>
                    {customers.map((customer, index) =>
                      <CustomerRow key={index} customer={customer} deleteCustomer={this.deleteCustomer} isAdmin={isAdmin} isBookkeeping={isBookkeeping}/>
                    )}
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
}

let mapStateToProps = (state) => ({
  customers: state.customers,
  currentUser: state.auth.user
});

let mapDispatchToProps = (dispatch) => ({
  customersActions: bindActionCreators(customersActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreInit(Customers));