import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();

const api = {
  getCurrentUser: () => axios.get('/api/users/currentUser', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(res => res.data),

  loadUsers: () => axios.get('/api/users/all', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(res => res.data),

  loadUsersInit: initToken => axios.get('/api/users/all', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${initToken}` } }).then(res => res.data),

  loadUserById: id => axios.get(`/api/users/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(res => res.data),


  updateUser: user => axios.put('/api/users/update-role', { data: user, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data),

  notify: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    return axios.post('/api/users/notify', { data, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data);
  },

  archiveNotification: notification => axios.put('/api/users/notificationArchive', { data: notification, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data),
};

export default api;
