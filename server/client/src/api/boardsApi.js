import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();

const boardsApi = {
  addBoard: board => axios.post('/api/boards', { data: board, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data),

  loadBoards: () => axios.get('/api/boards', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  loadBoardById: id => axios.get(`/api/boards/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  loadBoardsInit: initToken => axios.get('/api/boards', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${initToken}` } }).then(response => response.data),

  updateBoard: board => axios.put('/api/boards', { method: 'PUT', data: board, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data),

  updateBoardData: board => axios.put('/api/boards/data', { method: 'PUT', data: board, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data),

  moveBoard: (board, newFolderId) => axios.put('/api/boards/moveBoard', {
    method: 'PUT', data: board, moveTo: newFolderId, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' },
  }).then(res => res.data),

  deleteBoardById: id => axios.delete(`/api/boards/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  updateBoardAssign: board => axios.put('/api/boards/assign', {
    method: 'PUT', data: board, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' }, mode: 'cors',
  }).then(res => res.data),
};

export default boardsApi;
