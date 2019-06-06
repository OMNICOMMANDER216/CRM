import React from 'react';
import {
  Card, CardBody, CardGroup, Col, Container, Form, Row,
} from 'reactstrap';
import logo from '../../../assets/img/brand/oc-logo.png';

const Login = () => (
  <div className="app flex-row align-items-center">
    <Container>
      <Row className="justify-content-center">
        <Col md="12">
          <CardGroup>
            <Card className="p-6 oc-purple">
              <CardBody className="d-flex align-items-center justify-content-center">
                <Form className="text-center d-flex flex-column">
                  <h1>
                    <i className="fa fa-google fa-lg mt-4 display-1 text-white" />

                  </h1>
                  <p className="text-white">Sign In to your account</p>
                  <br />
                  <Row className="d-flex justify-content-center">
                    <Col xs="12" md="12">
                      <a tag="button" href="/auth/google" color="primary" className="px-5 p-2 loginBtn">Login</a>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
            <Card className="text-white py-3 d-md-down-none" style={{ width: '44%' }}>
              <CardBody className="text-center">
                <div className="p-5 text-purple">
                  <img src={logo} height={100} alt="OC logo" className="mb-4" />
                  <p> Welcome to the OMNICOMMANDER CRM. </p>
                  <p> Login Using your company google account and start working on your projects today.</p>

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
