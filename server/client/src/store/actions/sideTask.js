import actions from '../actionTypes';

export function setSideTask(task) {
  return {
    type: actions.SET_SIDE_TASK,
    task,
  };
}
