import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();

const api = {
  login: () => axios.get('http:localhost:5000/auth/google', { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }, mode: 'cors' }).then(response => response.data),

  getCurrentUser: () => axios.get('/users/getCurrentUser', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  logout: () => axios.post('/auth/logout'),
};

export default api;
