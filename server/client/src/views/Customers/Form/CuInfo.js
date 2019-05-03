import React from 'react';
import { Col, FormGroup, FormText, Input, Label, } from 'reactstrap';

export default ({customer, onChange, errors }) => {
  return (
               <React.Fragment>
                <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="name">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name" name="name" placeholder="CU Name" onChange={onChange} value={customer.name}/>
                      <FormText color="danger">{errors.name}</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="url">Url</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="url" name="url" placeholder="ie: www.example.com" onChange={onChange} value={customer.url}/>
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="pdf">PDF Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pdfs" name="pdfs" placeholder="Number of PDF" onChange={onChange} value={customer.pdfs}/>
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="kickoffDate">Kickoff </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="kickoffDate" name="kickoffDate" placeholder="Kickoff date" onChange={onChange} value={customer.kickoffDate}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="finalChangesDate">Final Changes </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="finalChangesDate" name="finalChangesDate" placeholder="date" onChange={onChange} value={customer.finalChangesDate}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="goLiveDate">Go Live </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="goLiveDate" name="goLiveDate" placeholder="date" onChange={onChange} value={customer.goLiveDate}/>
                    </Col>
                  </FormGroup>
            </React.Fragment> 
  )
}
