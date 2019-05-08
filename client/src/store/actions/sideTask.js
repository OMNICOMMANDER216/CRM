import actions from '../actionTypes';

// eslint-disable-next-line import/prefer-default-export
export function setSideTask(task) {
  return {
    type: actions.SET_SIDE_TASK,
    task,
  };
}

export function updateSideTask(task) {
  return {
    type: actions.UPDATE_SIDE_TASK,
    task,
  };
}
