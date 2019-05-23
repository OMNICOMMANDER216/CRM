import React, { Component } from 'react';
import _ from 'lodash';
import classNames from "classnames";
import {
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane, 
  Button, 
  Col, 
  Form, 
  FormGroup,
  FormText,
  Input,
  Label,
  Modal,
  ModalHeader, 
  ModalBody, 
  } from 'reactstrap';

class BoardModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "1",
    }
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    const {modalColumn, modalGroup, closeModal, modalHandler, saveColumn, saveGroup, errors} = this.props;
  return (
    <React.Fragment>
        <Modal isOpen={!_.isEmpty(modalColumn)} >
          <ModalHeader >
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.activeTab === "1" })}
                  onClick={() => { this.toggle("1") }}>
                  Column
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classNames({ active: this.state.activeTab === "2" })}
                  onClick={() => { this.toggle("2") }}>
                  Group
                </NavLink>
              </NavItem>
            </Nav>
          </ModalHeader>
          <ModalBody>
          <TabContent activeTab={this.state.activeTab} className='sideTabContent'>
            <TabPane tabId="1">
          <Form>
            <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Title</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input 
                    type="title" 
                    id="title" 
                    name="title" 
                    placeholder="title" 
                    onChange={modalHandler} 
                    value={modalColumn.title}/>
                  <FormText color="danger">{errors && errors.title}</FormText>
                </Col>
              </FormGroup>
            <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Column Type</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input 
                    type="select" 
                    name="type" 
                    value={modalColumn.type} 
                    onChange={modalHandler} 
                    onKeyDown={e => (e.keyCode === 13) && saveColumn() }
                    id="type">
                    <option value="select">Select</option>
                    { ['name', 'user', 'date', 'status', 'priority', 'last_updated', 'date'].map((data, index) => <option key={index} value={data}>{data}</option>) }
                  </Input>
                  <FormText color="danger">{errors && errors.type}</FormText>
                </Col>
              </FormGroup>
              </Form>
              <Button color="primary" onClick={saveColumn} className="mr-3">Save</Button>
              <Button color="secondary" onClick={closeModal}>Cancel</Button>
            </TabPane>
            <TabPane tabId="2">
              <Form>
                <FormGroup row>
                <Col md="12">
                  <Label htmlFor="name">Group Title</Label>
                </Col>
                <Col xs="12" md="12">
                  <Input 
                    type="title" 
                    id="title" 
                    name="groupTitle" 
                    placeholder="title" 
                    onChange={modalHandler} 
                    value={modalGroup.title}
                    onKeyDown={e => (e.keyCode === 13) && saveGroup() }
                    />
                  <FormText color="danger">{errors && errors.title}</FormText>
                </Col>
                </FormGroup>
                <Button color="primary" onClick={saveGroup} className="mr-3">Save</Button>
                <Button color="secondary" onClick={closeModal}>Cancel</Button>
              </Form>
            </TabPane>
            </TabContent>
          </ModalBody>
        </Modal>
    </React.Fragment>
  )}}

export default BoardModal;