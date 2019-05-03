import axios from 'axios';
import getToken from '../helpers/getToken';

const token  = getToken();

 const api = {
    loadColumns: (id) => axios.get('/api/columns/'+id, { headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'Access-Control-Allow-Methods' : '*' }}).then(response =>  response.data),

    loadColumnById: (id) => axios.get('/api/columns/'+id, { headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token } }).then(response =>  response.data),

    saveColumn: (note) => axios.post('/api/columns', {data: note, headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'Access-Control-Allow-Methods' : '*' }, mode: 'cors' }).then(res => res.data),

    updateColumn:  (note) => axios.put('/api/columns', {method: 'PUT', data: note, headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Methods' : '*' } }).then(res => res.data),

    deleteColumnById: (id) => axios.delete('/api/columns/'+id, { headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token } }).then(response =>  response.data)
};

export default api;