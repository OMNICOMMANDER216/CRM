import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { validateAll } from 'indicative';
import moment from 'moment';
import { Card, CardBody, CardHeader, ListGroup, ListGroupItem,  Col, Row, Table } from 'reactstrap';
import customerApi from '../../api/customerApi';
import NoteApi from '../../api/notesApi';

const Modal = React.lazy(() => import('./Modal'));

class Customer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customer: {},
      notes: [],
      modalNote: {},
      errors: {}
    };

  }

  componentDidMount() {
    const id = this.props.match.params.id;
    customerApi.loadCustomerById(id).then(res => {
      
      if(res.success) {
        NoteApi.loadNotes(res.data._id)
          .then(result => {
            console.log(result);
            if(result.success) {
              let notes = result.data.sort((a, b) => new Date(b.date) - new Date(a.date));
              this.setState({customer: res.data, notes: notes});
            } else {
                this.setState({customer: res.data});
            }
          });
      }
    });
  }

  noteHandler = (e) => {
    let note = Object.assign({}, this.state.modalNote);
    note[e.target.name] = e.target.value;

    this.setState({modalNote: note});
  }

  saveNote = () => {
    let note = Object.assign({}, this.state.modalNote);
    note.cu = this.state.customer._id;

    const rules = {
        date: 'required|string',
        comment: 'required|string'
      };

  validateAll(note, rules)
        .then(() => {
          if(note._id) {
            NoteApi.updateNote(note).then((res) =>{
                if(res.success) {
                  this.setState(prevState => {
                    return {notes: [...prevState.notes.filter(note => note._id !== res.data._id), Object.assign({}, res.data )]};
                  });
                }
            });
          } else {
              NoteApi.saveNote(note).then((res) =>{
                if(res.success) {
                  this.setState(prevState => {
                    return {notes: [...prevState.notes, Object.assign({}, res.data )]};
                  });
                }
            });
          }
        }).catch(errors => {  
          console.log(errors);
          let formattedErrors = {};
          errors.forEach(error => formattedErrors[error.field] = error.message);
          this.setState({errors: formattedErrors});
        });
    this.setState({modalNote: {}});
  }

  editNote = (id) => {
    this.setState(prevState => ( {modalNote: prevState.notes.find(note => note._id === id)}))
  }

  deleteNote = (id) => {
    NoteApi.deleteNoteById(id)
      .then(res => {
        if(res.success) {
          this.setState(prevState => ({notes: [...prevState.notes.filter(note => note._id !== id)]}));
        }
      });
  }
  
  openModal = () => {
    let note = {
      date: "",
      comment: ""
    };
    this.setState({modalNote: note});
  }

  closeModal = () => {
    this.setState({modalNote: {}});
  }

  momentFormat(date) {
    return moment(date).format("MMM Do YY");
  }


  

  render() {

    const {customer} = this.state;

    return (
      <div className="animated fadeIn">
        <Row className="d-flex">
          <Col lg={7} >
            <Card className="full-height">
              <CardHeader>
              <Row>
              <Col lg={4}>
                <strong><i className="icon-info pr-1"></i>Customer :</strong> {customer.name} <Link className="pl-1" to={{ pathname : `/customer/edit/${customer._id}`, state: {customer: customer} }}><i className="fa fa-edit customerEdit"></i></Link>
                </Col>
              <Col lg={4} className="purple">
                <strong>Final Change:</strong> {customer.finalChangesDate ? this.momentFormat(customer.finalChangesDate) : "Not Set"}
                </Col>
              <Col lg={4} className="purple">
                <strong>Final Change:</strong> {customer.goLiveDate ? this.momentFormat(customer.goLiveDate) : "Not Set"}
                </Col>
                </Row>
              </CardHeader>
              <CardBody>
                  <ListGroup>
                    <ListGroupItem><strong>Name:</strong> {customer.name}</ListGroupItem>
                    <ListGroupItem><strong>Url:</strong> {customer.url}</ListGroupItem>
                    <ListGroupItem><strong>Kickoff Date:</strong> { customer.kickoffDate ? this.momentFormat(customer.kickoffDate) : "Not Set"}</ListGroupItem>
                    <ListGroupItem><strong>Status:</strong> {customer.status}</ListGroupItem>
                    <ListGroupItem><strong>Services:</strong> {customer.services && customer.services.toString()}</ListGroupItem>
                    <ListGroupItem><strong>Assigned Developer:</strong> {customer.dev ? `${customer.dev.firstName} ${customer.dev.lastName}` : "Not Set"}</ListGroupItem>
                    <ListGroupItem><strong>Assigned PM:</strong> {customer.pm ? `${customer.pm.firstName} ${customer.pm.lastName}` : "Not Set"}</ListGroupItem>
                    <ListGroupItem><strong>Contact Name:</strong> {customer.contact && customer.contact.contactName}</ListGroupItem>
                    <ListGroupItem><strong>Contact Email:</strong> {customer.contact && customer.contact.contactEmail}</ListGroupItem>
                    <ListGroupItem><strong>Contact Number:</strong> {customer.contact && customer.contact.contactNumber}</ListGroupItem>
                    <ListGroupItem><strong>Contact Location:</strong> {customer.contact && customer.contact.contactLocation}</ListGroupItem>                    
                  </ListGroup>
              </CardBody>
            </Card>
          </Col>
          <Col lg={5}>
            <Card className="full-height">
              <CardHeader>
                <strong><i className="fa fa-history pr-1 "></i>Activities</strong>
              </CardHeader>
              <CardBody>
                  <Table responsive striped hover>
                  <thead>
                  <tr>
                    <th>Status</th>
                    <th>date</th>
                  </tr>
                  </thead>
                    <tbody>
                    {customer.log && customer.log.map((log, key) => (
                      <tr key={key}>
                        <td>{log.status}</td>
                        <td>{moment(log.time).format("MMM Do YY, h:mm:ss a")}</td>
                      </tr>
                    ))}
                    </tbody>
                  </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
        {/* Modal */}
        <Modal modalNote={this.state.modalNote} closeModal={this.closeModal} openModal={this.openModal} saveNote={this.saveNote} noteHandler={this.noteHandler} errors={this.state.errors}/>

        {/* display notes */}
        <Table className="mt-5 text-center">
        <thead>
          <tr >
            <td>Date</td>
            <td>Note</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
        </thead>
          <tbody>
          {
            this.state.notes.map(note => (
              <tr>
                <td>{note.date}</td>
                <td>{note.comment}</td>
                <td className="text-center" ><button className="oc-btn" onClick={() => this.editNote(note._id)}><i className="fa fa-edit"></i></button></td>
                <td className="text-center"><button className="oc-btn" onClick={(event) => this.deleteNote(note._id)}><i className="fa fa-trash"></i></button></td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    )
  }
}

export default Customer;
