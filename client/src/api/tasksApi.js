import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();

const api = {
  loadTasks: (id) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.get(`/api/tasks/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' } }).then(response => response.data);
  },

  loadTaskById: (id) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.get(`/api/tasks/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data);
  },

  createTask: (task) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.post('/api/tasks', { data: task, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data);
  },

  updateTask: (task) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.put('/api/tasks', { method: 'PUT', data: task, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data);
  },

  deleteTaskById: (id) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.delete(`/api/tasks/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data);
  },
};

export default api;
