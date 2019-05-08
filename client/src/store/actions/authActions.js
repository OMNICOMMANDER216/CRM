import actions from '../actionTypes';
import setAuthorizationToken from '../../helpers/setAuthorizationToken';
import jwtDecode from 'jwt-decode';
import setToken from '../../helpers/setToken';

export function setCurrentUser(user) {
  return {
    type: actions.SET_CURRENT_USER,
    user
  };
}

export function login(token) {
  return dispatch => {
    dispatch(setCurrentUser(jwtDecode(token)));
    setToken(token);
    
      return Promise.resolve();
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('jwtToken');
    setAuthorizationToken(false);
    dispatch(setCurrentUser({}));

    // return api.logout();
  };
}

// export function setToken( token) {
//   return dispatch => {
//     localStorage.setItem('jwtToken', token);
//      dispatch(setCurrentUser(jwtDecode(token)));
//      return Promise.resolve();
//   };
// }

export function initAuth() { 
  return dispatch => {
    const token = localStorage.getItem('jwtToken');
    if(token) {
      // setAuthorizationToken(token);
     return dispatch(setCurrentUser(jwtDecode(token)));
    }
  };
}

export function getCurrentUser() {
//   return dispatch => api.getCurrentUser().then(data => dispatch(setCurrentUser(data)))
    // .catch(Error => {throw Error;});
}