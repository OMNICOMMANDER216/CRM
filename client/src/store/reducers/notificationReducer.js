import actions from '../actionTypes';
import initialState from './initialState';

export default function notificationReducer(state = initialState.notifications, action) {
  switch (action.type) {
    case actions.LOAD_NOTIFICATIONS_SUCCESS:
      return action.notifications.sort((notification1, notification2) => notification1.createdAt.localeCompare(notification2.createdAt));

    default:
      return state;
  }
}
