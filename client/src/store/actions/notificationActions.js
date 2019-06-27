/* eslint-disable func-names */
import action from '../actionTypes';
import notificationsApi from '../../api/notificationsApi';


export function loadNotificationsSuccess(notifications) {
  return {
    type: action.LOAD_NOTIFICATIONS_SUCCESS,
    notifications,
  };
}

export function loadNotificationsFailed(message) {
  return {
    type: action.LOAD_NOTIFICATIONS_FAILED,
    message,
  };
}

export function loadNotifications() {
  return function (dispatch) {
    try {
      notificationsApi.loadNotifications().then(data => dispatch(loadNotificationsSuccess(data)));
    } catch (error) {
      return dispatch(loadNotificationsFailed(error.message));
    }
  };
}
