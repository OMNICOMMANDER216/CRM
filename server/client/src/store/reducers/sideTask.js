import actions from '../actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.sideTask, action) {
  switch(action.type) {
    case actions.SET_SIDE_TASK:
        return [ Object.assign({}, action.task) ];
    default: return state;
  }
}