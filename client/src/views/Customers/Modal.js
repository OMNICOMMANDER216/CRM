import React from 'react';
import _ from 'lodash';
import {Button,Col,Form,FormGroup,FormText,Input,Label, Modal, ModalHeader, ModalBody, ModalFooter, } from 'reactstrap';

export default ({modalNote, closeModal,openModal, noteHandler, saveNote, errors}) => {
  
  return (
    <React.Fragment>
      <Button color="danger" className="FloatingBtn" onClick={openModal}><i className="fa fa-plus"></i></Button>
        <Modal isOpen={!_.isEmpty(modalNote)} >
          <ModalHeader >Notes</ModalHeader>
          <ModalBody>
          <Form>
            <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Date</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input type="date" id="date" name="date" placeholder="Date" onChange={noteHandler} value={modalNote.date}/>
                  <FormText color="danger">{errors && errors.date}</FormText>
                </Col>
              </FormGroup>
            <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Note</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input type="textarea" id="comment" name="comment" placeholder="Note comment" onChange={noteHandler} value={modalNote.comment}/>
                  <FormText color="danger">{errors && errors.comment}</FormText>
                </Col>
              </FormGroup>
              </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={saveNote}>Save</Button>{' '}
            <Button color="secondary" onClick={closeModal}>Cancel</Button>
          </ModalFooter>
        </Modal>
    </React.Fragment>
  )
}
