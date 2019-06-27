import jwtDecode from 'jwt-decode';
import actions from '../actionTypes';
import setAuthorizationToken from '../../helpers/setAuthorizationToken';
import setToken from '../../helpers/setToken';

export function setCurrentUser(user) {
  return {
    type: actions.SET_CURRENT_USER,
    user,
  };
}

export function login(token) {
  return (dispatch) => {
    dispatch(setCurrentUser(jwtDecode(token)));
    return setToken(token);
  };
}

export function logout() {
  return (dispatch) => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));
  };
}

export function initAuth() {
  return (dispatch) => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      // setAuthorizationToken(token);
      return dispatch(setCurrentUser(jwtDecode(token)));
    }
  };
}
