import React, { Component } from 'react';
import PropTypes from "prop-types";
import CuInfos from './CuInfo';
import CuServices from './CuServices';
import CuContact from './CuContact';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
  Container,
} from 'reactstrap';
const CuAssignment = React.lazy(() => import('./CuAssignment'));

class CustomerForm extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  componentDidMount() {
    if(!this.props.customer._id) {
      document.getElementById("customer-form").reset();
    }
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const { customer, users,  onSave, onChange, errors, redirect, currentUser} = this.props;

    return (
      <Container>
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12" >
            <Card>
              <CardHeader>
                <strong>Customer Form</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" id="customer-form" ref={(el) => this.myFormRef = el}>

                {/* Cu Information */}
                  <CuInfos 
                    customer={customer} 
                    onChange={onChange} 
                    errors={errors} />

                  {/* Services Purchased */}
                  <CuServices 
                    customer={customer} 
                    onChange={onChange} 
                    errors={errors} />

                    {/* CU Contacts */}
                  <CuContact 
                    customer={customer} 
                    onChange={onChange} 
                    errors={errors} />

                      {/* Assignement  Only Shows id deposit paid*/}
                  <CuAssignment 
                    customer={customer} 
                    users={users} 
                    onChange={onChange} 
                    errors={errors}/>
                       {/* End  Assignment  */}
                      <FormGroup check className="mb-3">
                        <Label check>
                          <Input 
                            type="checkbox" 
                            name="Idle" 
                            checked={customer.status === "Idle"} 
                            onChange={onChange}
                            className="pr-2"/>
                          Idle?
                        </Label>
                      </FormGroup>
                      {((currentUser.role === 'Admin') || (currentUser.role === 'Bookkeeping')) &&
                      <FormGroup check className="mb-3">
                        <Label check>
                          <Input 
                            type="checkbox" 
                            name="paid" 
                            checked={customer.deposit} 
                            onChange={onChange}
                            className="pr-2"/>
                          Deposit Paid
                        </Label>
                      </FormGroup>}

                      <FormGroup check className="mb-3">
                        <Label check>
                          <Input 
                            type="checkbox" 
                            name="DNS" 
                            checked={customer.status === "DNS"} 
                            onChange={onChange}
                            className="pr-2"/>
                          Ready for DNS ?
                        </Label>
                      </FormGroup>
                      {((currentUser.role === 'Admin')) &&
                      <FormGroup check className="mb-3">
                        <Label check>
                          <Input 
                            type="checkbox" 
                            name="Live" 
                            checked={customer.status === "Live"} 
                            onChange={onChange}
                            className="pr-2"/>
                          LIVE
                        </Label>
                      </FormGroup>}

                      {((currentUser.role === 'Admin') || (currentUser.role === 'Bookkeeping')) &&
                      <FormGroup check className="mb-3">
                        <Label check>
                          <Input 
                            type="checkbox" 
                            name="finalPayment" 
                            checked={customer.finalPayment} 
                            onChange={onChange}
                            className="pr-2"/>
                          Final Payment
                        </Label>
                      </FormGroup>}
                     
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-center">
                <Button 
                  type="submit" 
                  onClick={onSave} 
                  size="md" 
                  color="primary" 
                  className="m-2">
                    <i className="fa fa-dot-circle-o"></i> Submit
                </Button>
                <Button 
                  type="reset" 
                  onClick={redirect} 
                  size="md" 
                  color="danger" 
                  className="m-2">
                    <i className="fa fa-ban"></i> Back
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
      </Container>
    );
  }
}

CustomerForm.propTypes = {
  customer: PropTypes.object,
  users: PropTypes.array,
  onSave: PropTypes.func,
  onChange: PropTypes.func,
  errors: PropTypes.object,
  redirect: PropTypes.func,
  currentUser: PropTypes.object,
};

export default CustomerForm;