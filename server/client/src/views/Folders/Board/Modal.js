import React from 'react';
import _ from 'lodash';
import {Button,Col,Form,FormGroup,FormText,Input,Label, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

export default ({modalColumn, closeModal, columnHandler, saveColumn, errors}) => {
  
  return (
    <React.Fragment>
        <Modal isOpen={!_.isEmpty(modalColumn)} >
          <ModalHeader >Columns</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Title</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input type="title" id="title" name="title" placeholder="title" onChange={columnHandler} value={modalColumn.title}/>
                  <FormText color="danger">{errors && errors.title}</FormText>
                </Col>
              </FormGroup>
            <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Column Type</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input type="select" name="type" value={modalColumn.type} onChange={columnHandler} id="type" >
                  <option value="select">Select</option>
                { ['name', 'user', 'date', 'status', 'priority', 'last_updated', 'date'].map((data, index) => <option key={index} value={data}>{data}</option>) }
           </Input>
                  <FormText color="danger">{errors && errors.type}</FormText>
                </Col>
              </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={saveColumn}>Save</Button>{' '}
            <Button color="secondary" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </React.Fragment>
  )
}
