import actions from '../actionTypes';
import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
  switch (action.type) {
    case actions.LOAD_USERS_SUCCESS:
      return action.users.sort((a, b) => a.firstName.localeCompare(b.firstName));
    case actions.UPDATE_USER_SUCCESS:
      return [
        ...state.filter(user => user._id !== action.user._id),
        Object.assign({}, action.user),
      ];
    default:
      return state;
  }
}
