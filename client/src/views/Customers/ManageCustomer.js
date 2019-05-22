import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import  { Redirect } from 'react-router-dom';
import CustomerForm from './Form/CustomerForm';
import CustomerModel from './CustomerModel';
import { validateAll } from 'indicative';
import * as customersActions from '../../store/actions/customersActions';
import requireRole from '../../helpers/RequireRole';

class ManageCustomerPage extends React.Component { 
  constructor(props, context) {
    super(props, context);
    this.state = {
      customer: Object.assign({}, this.props.customer),
      users: [],
      errors: {},
      saving: false,
      disabledAdvance: false,
      disabledLive: false,
      toDashboard: false,
      assign: false
    };
    
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.customer && (this.props.customer._id !== nextProps.customer._id)) {
      // necessary to populate form when existing user is loaded directly.
      this.setState({ customer: Object.assign({}, nextProps.customer) });
    }
  }
  
   componentWillMount() {
    const currentUrl = this.props.location.pathname;    
      let customer = {};
      if(currentUrl.includes("/edit")) {
        if(this.props.location.state.customer) {
          customer = this.props.location.state.customer;
        } else {
          const id = this.props.match.params.id;
          customer = this.props.customers.find(customer => customer._id === id);
        }
        this.setState({customer: customer});

      }else if(currentUrl.includes("/add")) {
        this.setState({customer: CustomerModel});
      }
    }

    componentDidMount() {
        this.setState({ users: this.props.users });
    }

  updateCustomerState = (event) => { 
    let customer = Object.assign({}, this.state.customer);

    // Status update for Assigned
    if((customer.status === "Deposit") && (customer.status !== "Assigned")){
      customer.status = "Assigned";
    }

    if(event.target.type === "checkbox") { //If Input  is checkBox
      if(event.target.name === "paid") {
        customer.deposit = event.target.checked;
        customer.status = "Deposit";

      }  else if(event.target.name === "finalPayment") {
          customer.finalPayment = true;

        } else if(event.target.name === "Idle") {
        customer.status = "Idle";

      }else if(event.target.name === "DNS") {
        if(customer.status !== "DNS") {
          customer.status = "DNS";
        } else {
          customer.status = "Assigned";
        }

      }else if(event.target.name === "Live") { //Set status to Live
        customer.status = "Live";
      } else {
        let services = customer.services;
        if(event.target.checked) {
          services.push(event.target.value);
        } else {
          services = services.filter(el => el !== event.target.value);
        }
        customer.services = services;
      }
    }else if (event.target.name === "contactName" || event.target.name === "contactEmail" || event.target.name === "contactNumber" || event.target.name === "contactLocation") { //Handle CU Contact infos
      if(!customer.contact) customer.contact = {};
      customer.contact[event.target.name] = event.target.value;
    } else { // Handle other types of input
      const field = event.target.name;
      customer[field] = event.target.value;
    }

    return this.setState({ customer: customer });
  }

  saveCustomer = (event) => {
    event.preventDefault();

    let customer = Object.assign({}, this.state.customer);
    // Set Axios header
      const rules = {
        name: 'required|string',
        services: 'required|array'
      };

      validateAll(customer, rules)
        .then(() => {

            if(customer._id) {
              this.setState({ saving: true });
              
              this.props.customersActions.updateCustomer(customer);
              this.setState({
                    toDashboard: true
                  });
            } else {
              this.setState({ saving: true });
              this.props.customersActions.saveCustomer(customer);
              this.setState({
                    toDashboard: true
                  });
            }
        })
        .catch(errors => {  
          console.log(errors);
          let formattedErrors = {};
          errors.forEach(error => formattedErrors[error.field] = error.message);
          this.setState({errors: formattedErrors});
        });
     
  }

  redirect = () => {
    this.setState({toDashboard: true});
  }
  
  render() {
    if(this.state.toDashboard) {
      return <Redirect to='/customers' />
    }
    return (    
        <CustomerForm 
        customer={this.state.customer}
        users={this.state.users}
        onSave={this.saveCustomer}
        onChange={this.updateCustomerState}
        errors={this.state.errors}
        saving={this.state.saving}
        redirect={this.redirect}
        currentUser={this.props.currentUser}
      /> 
    );
  }
}
ManageCustomerPage.propTypes = {

};

const mapStateToProps = (state) => ({
  customers: state.customers,
  users: state.users,
  currentUser: state.auth.user
});

function mapDispatchToProps(dispatch) {
  return {
    customersActions: bindActionCreators(customersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(requireRole(['Admin'],ManageCustomerPage));