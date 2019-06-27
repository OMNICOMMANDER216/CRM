import axios from 'axios';
import getToken from './getToken';

const token = getToken();

export const setAuth = () => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const unsetAuth = () => {
  delete axios.defaults.headers.common.Authorization;
};
