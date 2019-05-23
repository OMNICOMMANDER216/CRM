import React, { Component } from 'react';
import Select from 'react-select';
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
  Container,
} from 'reactstrap';

class BoardForm extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300
    };
  }

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade = () => {
    this.setState((prevState) => { return { fadeIn: !prevState }});
  }

  render() {
    const { folder, board, customers, selectedCustomer,  onSave, onChange, updateCustomer, errors, redirect} = this.props;
    const options = customers.map(customer => {
      return {value: customer._id, label: customer.name}
    });


    return (
      <Container>
        {folder && 
        <React.Fragment>
        <h2> Folder: {folder.name} </h2>
        <div className="animated fadeIn">
          <Row>
            <Col xs="12" md="12" >
              <Card>
                <CardHeader>
                  <strong> Add Board</strong>
                </CardHeader>
                <CardBody>
                  <Form 
                    action="" 
                    method="post" 
                    encType="multipart/form-data" 
                    id="board-form" 
                    ref={(el) => this.myFormRef = el}>
                    <React.Fragment>
                    <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="name"><strong>Board Name</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Board Name" 
                        onChange={onChange} 
                        value={board && board && board.name}/>
                        <FormText color="danger">{errors.name}</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="name"><strong>Board Description</strong></Label>
                  </Col>
                  <Col xs="12" md="9">
                    <Input 
                      type="textarea" 
                      id="description" 
                      name="description" 
                      placeholder="Board description" 
                      rows="7" 
                      onChange={onChange} 
                      value={board && board && board.description}/>
                      <FormText color="danger">{errors.description}</FormText>
                  </Col>
                  </FormGroup>
                  <FormGroup row  className="mt-3"> 
                  <Col className="offset-md-4 col-md-6"><FormText color="info">Select a customer for a project Board</FormText></Col>
                    <Col md="3">
                      <Label for="pm"><strong>Customer</strong></Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Select
                        value={selectedCustomer}
                        onChange={updateCustomer}
                        options={options}
                      />
                  <FormText color="danger">{errors.customer}</FormText>
                  </Col>
                </FormGroup>
                </React.Fragment>
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
      </React.Fragment>}
    </Container>
    );
  }}

export default BoardForm;