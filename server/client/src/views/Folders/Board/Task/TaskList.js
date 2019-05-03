import React, { Fragment} from 'react';
const TaskItem = React.lazy(() => import('../Task/TaskItem'));

export default ({tasks, users, isEditableHandler, saveHandler, changeHandler, editActive}) => {
  return (
        <Fragment>
            { tasks.map((task, i) => <TaskItem key={task._id + i} task={task} users={users} isEditableHandler={isEditableHandler} changeHandler={changeHandler} saveHandler={saveHandler} editActive={editActive} /> )}
        </Fragment>
  )
}
