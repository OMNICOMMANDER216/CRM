import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();
console.log(token);

const api = {
  loadCustomers: () => axios.get('/api/customers', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  loadCustomerById: id => axios.get(`/api/customers/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` } }).then(response => response.data),

  loadCustomersInit: initToken => axios.get('/api/customers', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${initToken}` } }).then(response => response.data),

  saveCustomer: customer => axios.post('/api/customers', { data: customer, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data),

  updateCustomer: customer => axios.put('/api/customers', { method: 'PUT', data: customer, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data),

  deleteCustomerById: id => axios.delete(`/api/customers/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  updateCustomerAssign: customer => axios.put('/api/customers/assign', {
    method: 'PUT', data: customer, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' }, mode: 'cors',
  }).then(res => res.data),
};

export default api;
