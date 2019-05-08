import actions from '../actionTypes';
import initialState from './initialState';

export default function authReducer(state = initialState.sideTask, action) {
  switch (action.type) {
    case actions.SET_SIDE_TASK:
      return [{ ...action.task }];

    case actions.UPDATE_SIDE_TASK:
      return [
        ...state.filter(task => task._id !== action.task._id),
      ];
    default: return state;
  }
}
