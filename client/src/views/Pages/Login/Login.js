import React, { Component } from 'react';
import {
  Card, CardBody, CardGroup, Col, Container, Form, Row,
} from 'reactstrap';

const Login = () => (
  <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="12">
          <CardGroup>
            <Card className="p-6">
              <CardBody className="d-flex align-items-center justify-content-center">
                <Form className="text-center d-flex flex-column">
                  <h1>
                    <i className="fa fa-google fa-lg mt-4 display-1" />

                  </h1>
                  <p className="text-muted">Sign In to your account</p>
                  <br />
                  <Row className="d-flex justify-content-center">
                    <Col xs="6" md="12">
                      <a tag="button" href="/auth/google" color="primary" className="px-5 bg-success p-2">Login</a>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
            <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
              <CardBody className="text-center">
                <div className="p-5">
                  <h2>OMNICOMMANDER</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>

                </div>
              </CardBody>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Login;
