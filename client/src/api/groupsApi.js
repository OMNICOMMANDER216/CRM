import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();

const api = {

  loadGroupById: id => axios.get(`/api/groups/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  createGroup: data => axios.post('/api/groups', { data: data, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data),

  updateGroup: task => axios.put('/api/groups', { method: 'PUT', data: task, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data),

  deleteGroupById: id => axios.delete(`/api/groups/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),
};

export default api;
