/* eslint-disable func-names */
import axios from 'axios';
import action from '../actionTypes';
import api from '../../api/userApi';
import getToken from '../../helpers/getToken';

const token = getToken();

export function loadUsersSuccess(users) {
  return {
    type: action.LOAD_USERS_SUCCESS,
    users,
  };
}
export function loadUsersFailed(message) {
  return {
    type: action.LOAD_USERS_FAILED,
    message,
  };
}

export function loadUser(users, _id) {
  return {
    type: action.LOAD_USER,
    users,
    _id,
  };
}

export function updateUserSuccess(user) {
  return {
    type: action.UPDATE_USER_SUCCESS,
    user,
  };
}

export function updateUserFailed(message) {
  return {
    type: action.UPDATE_USER_FAILED,
    message,
  };
}

export function getCurrentUser() {
  return function (dispatch) {
    try {
      return api.getCurrentUser().then(data => console.log(data))
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      return dispatch(loadUsersFailed(error.message));
    }
  };
}

export function loadUsers() {
  return function (dispatch) {
    try {
      return api.loadUsers().then(res => dispatch(loadUsersSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return dispatch(loadUsersFailed(error.message));
    }
  };
}

export function loadUsersInit(initToken) {
  return function (dispatch) {
    try {
      return api.loadUsersInit(initToken).then(res => dispatch(loadUsersSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return dispatch(loadUsersFailed(error.message));
    }
  };
}

export function updateUser(updatedUser) {
  return function (dispatch, getState) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
    try {
      return api.updateUser(updatedUser).then(res => dispatch(updateUserSuccess(res.data)))
        .catch(err => console.log(err));
    } catch (error) {
      return updatedUser._id ? dispatch(updateUserFailed(error.message)) : dispatch(updateUserFailed(error.message));
    }
  };
}

export function archiveNotification(notification) {
  return function (dispatch, getState) {
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete axios.defaults.headers.common.Authorization;
    }
    try {
      return api.archiveNotification(notification)
        .then(res => dispatch(updateUserSuccess(res.data)))
        .catch(err => console.log('Error with the Api request'));
    } catch (error) {
      return notification._id ? dispatch(updateUserFailed(error.message)) : dispatch(updateUserFailed(error.message));
    }
  };
}
