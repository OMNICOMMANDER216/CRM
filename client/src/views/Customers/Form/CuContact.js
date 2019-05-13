import React from 'react';
import { Col, FormGroup, FormText, Input, Label, } from 'reactstrap';

export default ({customer, onChange, errors }) => {
  return (
    <React.Fragment>
    <h2 className="text-center pt-4">CU Contact Information</h2>
      <FormGroup row>
        <Col md="3">
          <Label htmlFor="contactName">Contact Name</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="contactName" name="contactName" placeholder="CU Contact Name" onChange={onChange} value={customer.contact && customer.contact.contactName}/>
          <FormText color="danger">{errors.contactName}</FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="3">
          <Label htmlFor="contactEmail">Contact email</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="email" id="contactEmail" name="contactEmail" placeholder="CU Contact Email" onChange={onChange} value={customer.contact && customer.contact.contactEmail}/>
          <FormText color="danger">{errors.contactEmail}</FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="3">
          <Label htmlFor="contactNumber">Contact Number</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="contactNumber" name="contactNumber" placeholder="CU Contact Number" onChange={onChange} value={customer.contact && customer.contact.contactNumber}/>
          <FormText color="danger">{errors.contactNumber}</FormText>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="3">
          <Label htmlFor="contactLocation">Contact Address</Label>
        </Col>
        <Col xs="12" md="9">
          <Input type="text" id="contactLocation" name="contactLocation" placeholder="CU Contact Address" onChange={onChange} value={customer.contact && customer.contact.contactLocation}/>
          <FormText color="danger">{errors.contactLocation}</FormText>
        </Col>
      </FormGroup> 
    </React.Fragment>
  )
}
