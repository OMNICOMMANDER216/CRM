
import React from 'react';
import PropTypes from 'prop-types';
import { AppAsideToggler } from '@coreui/react';
import isEmpty from 'lodash/isEmpty';
import inputBuilder from '../../../../helpers/inputBuilder';

export default function TaskItem(props) {
  const {
    task, users, isEditingHandler, saveHandler, changeHandler, editActive, setSideTask, sideTask, removeTask,
  } = props;

  return (
    <tr
      className="active"
      onDoubleClick={() => isEditingHandler(task, false)}
      onBlur={() => isEditingHandler({}, false)}
    >
      <td className="edit">
        { (editActive._id !== task._id) && (
          <span
            onClick={() => isEditingHandler(task)}
            onKeyDown={e => (e.keyCode === 13) && isEditingHandler(task)}
            size="md"
            color="primary"
            className="m-2"
          >
            <AppAsideToggler
              disabled={isEmpty(sideTask)}
            >
              <i className="fa fa-pencil" />
            </AppAsideToggler>
          </span>
        )}
        { (editActive._id === task._id) && (
          <button
            type="submit"
            onClick={() => saveHandler(task) || isEditingHandler({})}
            size="md"
            color="primary"
            className="m-2"
          >
            <i className="fa fa-save" />
          </button>
        )}
        <button
          type="submit"
          onClick={() => window.confirm('Are you sure ?') && removeTask(task)}
          size="md"
          color="primary"
          className="m-2"
        >
          <i className="fa fa-trash" />
        </button>
      </td>
      { task.column && (
        task.column.map((col, i) => (
          inputBuilder(
            i,
            users,
            col,
            (editActive._id !== task._id),
            changeHandler,
            sideTask,
            setSideTask,
            task,
            editActive,
            isEditingHandler,
            saveHandler,
            removeTask,
          )))
      )}
    </tr>
  );
}

TaskItem.propTypes = {
  task: PropTypes.PropTypes.shape({}).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isEditingHandler: PropTypes.func.isRequired,
  saveHandler: PropTypes.func.isRequired,
  changeHandler: PropTypes.func.isRequired,
  editActive: PropTypes.PropTypes.shape({}).isRequired,
  setSideTask: PropTypes.func.isRequired,
  sideTask: PropTypes.PropTypes.shape({}).isRequired,
  removeTask: PropTypes.func.isRequired,
};
