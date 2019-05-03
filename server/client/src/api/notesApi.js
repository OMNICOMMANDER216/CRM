import axios from 'axios';
import getToken from '../helpers/getToken';

const token  = getToken();

 const api = {
    loadNotes: (id) => axios.get('/api/notes/'+id, { headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'Access-Control-Allow-Methods' : '*' }}).then(response =>  response.data),

    loadNoteById: (id) => axios.get('/api/notes/'+id, { headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token } }).then(response =>  response.data),

    saveNote: (note) => axios.post('/api/notes', {data: note, headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token, 'Access-Control-Allow-Methods' : '*' }, mode: 'cors' }).then(res => res.data),

    updateNote:  (note) => axios.put('/api/notes', {method: 'PUT', data: note, headers: { 'Content-Type': 'application/json' , 'Access-Control-Allow-Methods' : '*' } }).then(res => res.data),

    deleteNoteById: (id) => axios.delete('/api/notes/'+id, { headers: {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token } }).then(response =>  response.data)
};

export default api;