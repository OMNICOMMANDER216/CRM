import axios from 'axios';
import getToken from '../helpers/getToken';

const token = getToken();

const foldersApi = {
  loadFolders: () => axios.get('/api/folders', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),

  loadFoldersToken: t => axios.get('/api/folders', { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${t}` } }).then(response => response.data),

  addFolder: (folder) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.post('/api/folders', { data: folder, headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}`, 'Access-Control-Allow-Methods': '*' }, mode: 'cors' }).then(res => res.data);
  },

  updateFolder: (folder) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;

    return axios.put('/api/folders', { method: 'PUT', data: folder, headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*' } }).then(res => res.data);
  },

  removeFolderById: id => axios.delete(`/api/folders/${id}`, { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } }).then(response => response.data),
};

export default foldersApi;
