import actions from '../actionTypes';
import initialState from './initialState';
import isEmpty from 'lodash/isEmpty';

export default function authReducer(state = initialState.auth, action) {
  switch(action.type) {
    case actions.SET_CURRENT_USER:
        return {
          isAuthenticated : !isEmpty(action.user),
          user : action.user
        };
    default: return state;
  }
}