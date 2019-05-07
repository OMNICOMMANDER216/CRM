import React, { Fragment} from 'react';
const TaskItem = React.lazy(() => import('../Task/TaskItem'));

export default (props) => {
  let {tasks, users, isEditingHandler, saveHandler, changeHandler, editActive, setSideTask, sideTask, removeTask} = props;
  tasks = tasks.sort((task1, task2) => task1._id.localeCompare(task2._id))
  return (
        <Fragment>
            { tasks.map((task, i) => <TaskItem key={task._id + i} task={task} users={users} isEditingHandler={isEditingHandler} changeHandler={changeHandler} saveHandler={saveHandler} editActive={editActive} setSideTask={setSideTask} sideTask={sideTask} removeTask={removeTask}/> )}
        </Fragment>
  )
}
