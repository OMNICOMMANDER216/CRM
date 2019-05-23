import React, { Component } from 'react';
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
} from 'reactstrap';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: true,
      fadeIn: true,
      timeout: 300,
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleFade() {
    this.setState(prevState => ({ fadeIn: !prevState }));
  }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" md="12">
            <Card>
              <CardHeader>
                <strong>Customer Form</strong>
              </CardHeader>
              <CardBody>
                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="name-input">Name</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="name-input" name="name-input" placeholder="CU Name" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="url-input">Url</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="url-input" name="url-input" placeholder="CU URL" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="pdf-input">PDF Number</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="text" id="pdf-number" name="pdf-number" placeholder="Number of PDF" />
                      <FormText color="muted">This is a help text</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="finalChangesDate">Final Changes </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="finalChangesDate" name="finalChangesDate" placeholder="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label htmlFor="goLiveDate">Go Live </Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="date" id="goLiveDate" name="goLiveDate" placeholder="date" />
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Services</Label>
                    </Col>
                    <Col md="9">
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="website" name="website" value="website" />
                        <Label className="form-check-label" check htmlFor="website">Website</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="social-media" name="social-media" value="social-media" />
                        <Label className="form-check-label" check htmlFor="social-media">Social Media</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="email" name="email" value="email" />
                        <Label className="form-check-label" check htmlFor="email">Email</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="live-chat" name="live-chat" value="live-chat" />
                        <Label className="form-check-label" check htmlFor="live-chat">Live Chat</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="branding" name="branding" value="branding" />
                        <Label className="form-check-label" check htmlFor="branding">Branding</Label>
                      </FormGroup>
                      <FormGroup check inline>
                        <Input className="form-check-input" type="checkbox" id="promet" name="promet" value="promet" />
                        <Label className="form-check-label" check htmlFor="promet">Promet</Label>
                      </FormGroup>
                    </Col>
                  </FormGroup>
                </Form>
              </CardBody>
              <CardFooter className="d-flex justify-content-center">
                <Button type="submit" size="md" color="primary" className="m-2">
                  <i className="fa fa-dot-circle-o" />
                  
Submit
                </Button>
                <Button type="reset" size="md" color="danger" className="m-2">
                  <i className="fa fa-ban" />
                  
Reset
                </Button>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Forms;
