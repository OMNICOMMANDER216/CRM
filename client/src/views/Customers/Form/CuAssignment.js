import React from 'react';
import { Col, FormGroup, Input, Label, } from 'reactstrap';

export default ({customer, users, onChange}) => {
  return (
      <React.Fragment>
            {customer.deposit &&
                      <React.Fragment>
                      <h2> Assignments</h2>
                      <FormGroup row  className="mt-3"> 
                      <Col md="3">
                        <Label for="pm">Project Manager</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="pm" id="pm" value={customer.pm} onChange={onChange}>
                        <option value="">Select</option>
                          {
                            users && users.map((user, index) => <option key={index} value={user._id}>{`${user.firstName} ${user.lastName}`}</option>)
                          }
                        </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row >  
                      <Col md="3">
                        <Label for="developer">Developer</Label>
                        </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="dev" id="developer" value={customer.dev} onChange={onChange}>
                          <option value="">Select</option>
                          {
                            users && users.map((user, index) => <option key={index} value={user._id}>{`${user.firstName} ${user.lastName}`}</option>)
                          }
                        </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row >
                      <Col md="3">
                        <Label for="developer">Compliance Officer</Label>
                        </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="compliance" id="compliance" value={customer.compliance} onChange={onChange}>
                          <option value="">Select</option>
                          {
                            users && users.map((user, index) => <option key={index} value={user._id}>{`${user.firstName} ${user.lastName}`}</option>)
                          }
                        </Input>
                        </Col>
                      </FormGroup>
                      <FormGroup row >
                      <Col md="3">
                        <Label for="QA">QA Officer</Label>
                        </Col>
                      <Col xs="12" md="9">
                        <Input type="select" name="QA" id="QA" value={customer.QA} onChange={onChange}>
                          <option value="">Select</option>
                          {
                            users && users.map((user, index) => <option key={index} value={user._id}>{`${user.firstName} ${user.lastName}`}</option>)
                          }
                        </Input>
                        </Col>
                      </FormGroup>
                       </React.Fragment>
                      }
                </React.Fragment>
  )
}
