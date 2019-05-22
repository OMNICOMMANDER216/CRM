import axios from 'axios';
import action from '../actionTypes';
import getToken from '../../helpers/getToken';
import api from '../../api/customerApi';

const token = getToken();

export function loadCustomersSuccess(customers) {
  return {
    type: action.LOAD_CUSTOMERS_SUCCESS,
    customers,
  };
}
export function loadCustomersFailed(message) {
  return {
    type: action.LOAD_CUSTOMERS_FAILED,
    message,
  };
}

export function createCustomerSuccess(customer) {
  return {
    type: action.CREATE_CUSTOMER_SUCCESS,
    customer,
  };
}
export function createCustomerFailed(message) {
  return {
    type: action.CREATE_CUSTOMER_FAILED,
    message,
  };
}

export function updateCustomerSuccess(customer) {
  return {
    type: action.UPDATE_CUSTOMER_SUCCESS,
    customer,
  };
}

export function updateCustomerFailed(message) {
  return {
    type: action.UPDATE_CUSTOMER_FAILED,
    message,
  };
}
export function deleteCustomerSuccess(id) {
  return {
    type: action.DELETE_CUSTOMER_SUCCESS,
    id,
  };
}

export function deleteCustomerFailed(message) {
  return {
    type: action.DELETE_CUSTOMER_FAILED,
    message,
  };
}

export function loadCustomers() {
  return function (dispatch) {
    try {
      return api.loadCustomers().then(res => dispatch(loadCustomersSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return dispatch(loadCustomersFailed(error.message));
    }
  };
}

export function loadCustomersInit(initToken) {
  return function (dispatch) {
    try {
      return api.loadCustomersInit(initToken).then(res => dispatch(loadCustomersSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return dispatch(loadCustomersFailed(error.message));
    }
  };
}

export function saveCustomer(customer) {
  return function (dispatch, getState) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    try {
      return api.saveCustomer(customer).then(res => dispatch(createCustomerSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return customer.customerId ? dispatch(createCustomerFailed(error.message))
        : dispatch(createCustomerFailed(error.message));
    }
  };
}


export function updateCustomer(customer) {
  return function (dispatch, getState) {
    // dispatch(beginAjaxCall());
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      return api.updateCustomer(customer).then(res => dispatch(updateCustomerSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return customer.customerId ? dispatch(updateCustomerFailed(error.message)) : dispatch(updateCustomerFailed(error.message));
    }
  };
}

export function deleteCustomer(id) {
  return function (dispatch, getState) {
    try {
      return api.deleteCustomerById(id).then((res) => {
        if (res.success) {
          dispatch(deleteCustomerSuccess(id));
        }
      }).catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return dispatch(updateCustomerFailed(error.message));
    }
  };
}
