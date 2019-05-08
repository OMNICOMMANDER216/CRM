import React, { Component } from 'react';
import { Card, CardBody, CardGroup, Col, Container, Form, Row } from 'reactstrap';

class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="6">
              <CardGroup>
                <Card className="p-5">
                  <CardBody>
                    <Form className="text-center">
                      <h1><i className="fa fa-google fa-lg mt-4"></i> Login</h1>
                      <p className="text-muted">Sign In to your account</p><br/>
                      <Row >
                        <Col xs="6" md="12">
                          <a tag="button" href="/auth/google" color="primary" className="px-5 bg-success p-2">Login</a>
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
