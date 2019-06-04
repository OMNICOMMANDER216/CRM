import axios from 'axios';
import getToken from '../helpers/getToken';

const boardsApi = {
  addBoard: board => axios.post('/api/boards', { data: board, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data),

  loadBoards: () => axios.get('/api/boards', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` } }).then(response => response.data),

  loadBoardById: id => axios.get(`/api/boards/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` } }).then(response => response.data),

  loadBoardsInit: initToken => axios.get('/api/boards', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${initToken}` } }).then(response => response.data),

  updateBoard: (board) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    return axios.put('/api/boards', { method: 'PUT', data: board, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data);
  },

  updateGroupsOrder: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    return axios.put('/api/boards/groupsOrder', { method: 'PUT', data, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}`, 'Access-Control-Allow-Methods': '*' } }).then(res => res.data);
  },

  addBoardColumn: (board) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    return axios.put('/api/boards/data', { method: 'PUT', data: board, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data);
  },

  removeBoardColumn: (data) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    return axios.put('/api/boards/removeColumn', { method: 'PUT', data, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data);
  },

  moveBoard: (board, newFolderId) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    return axios.put('/api/boards/moveBoard', {
      method: 'PUT', data: board, moveTo: newFolderId, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' },
    }).then(res => res.data);
  },

  deleteBoardById: id => axios.delete(`/api/boards/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` } }).then(response => response.data),

  updateBoardAssign: (board) => {
    axios.defaults.headers.common.Authorization = `Bearer ${getToken()}`;

    return axios.put('/api/boards/assign', {
      method: 'PUT', data: board, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' }, mode: 'cors',
    }).then(res => res.data);
  },
};

export default boardsApi;
