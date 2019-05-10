import React from 'react';
import { Input } from 'reactstrap';
const TaskItem = React.lazy(() => import('../Task/TaskItem'));

export default (props) => {
  let {tasks, group, columns, users, isEditingHandler, saveHandler, editHandler, disabled, changeHandler, editActive, setSideTask, taskFilter, sideTask, removeTask} = props;
  tasks = tasks.sort((t1, t2) => t1._id.localeCompare(t2._id))
  tasks = tasks.filter(t => t.column[0].value.toLowerCase().includes(taskFilter))
  return (
        <tbody>
            { tasks.map((task, i) => <TaskItem key={task._id + i} task={task} users={users} isEditingHandler={isEditingHandler} changeHandler={changeHandler} saveHandler={saveHandler} editActive={editActive} setSideTask={setSideTask} sideTask={sideTask} removeTask={removeTask}/> )}
            <tr>
              <td>
                { (disabled !== group._id) &&
                  <button type="submit" 
                    onClick={editHandler} 
                    size="md" 
                    color="primary" 
                    className="m-2">
                    <i className="fa fa-pencil"></i>
                  </button> }
                  
                  <button type="submit" 
                    onClick={saveHandler} 
                    size="md" 
                    color="primary" 
                    className="m-2">
                    <i className="fa fa-save"></i> 
                  </button>
              </td>
              <th colSpan={columns.length}> 
                <Input type="text" 
                  id={group._id} 
                  name="new" 
                  placeholder="name"  
                  disabled={disabled !== group._id} 
                  onChange={changeHandler} />
              </th>
            </tr>
        </tbody>
  )
}
