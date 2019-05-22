import axios from 'axios';
// import getToken from '../helpers/getToken';

// const token = getToken();

const foldersApi = {
  loadFolders: () => axios.get('/api/folders').then(response => response.data),
};

export default foldersApi;
