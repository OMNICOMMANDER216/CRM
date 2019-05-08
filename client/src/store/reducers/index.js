import { combineReducers } from 'redux';
import customers from './customersReducer';
import users from './usersReducer';
import auth from './authReducer';
import notifications from './notificationReducer';
import folders from './folderReducer';
import sideTask from './sideTask';

export default combineReducers({
  customers,
  users,
  notifications,
  auth,
  folders,
  sideTask,
});
