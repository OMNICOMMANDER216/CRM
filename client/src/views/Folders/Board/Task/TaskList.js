import React, { Component } from 'react';
import { Input } from 'reactstrap';
const TaskItem = React.lazy(() => import('../Task/TaskItem'));

export default class TaskLIst extends Component {
  state = {
    new: ""
  }

  localNew = (e) => {
    this.setState({new: e.target.value});
  }

  clearInput = () => {
    this.setState({new: ""});
  }

  render() {
  let {tasks, group, columns, users, isEditingHandler, saveHandler, editHandler, disabled, changeHandler, editActive, setSideTask, taskFilter, sideTask, removeTask} = this.props;
  tasks = tasks.sort((t1, t2) => t1._id.localeCompare(t2._id))
  tasks = tasks.filter(t => t.column[0].value.toLowerCase().includes(taskFilter))
  return (
        <tbody>
            { tasks.map((task, i) => (
              <TaskItem 
              key={task._id + i} 
              task={task} 
              users={users} 
              isEditingHandler={isEditingHandler} 
              changeHandler={changeHandler} 
              saveHandler={saveHandler} 
              editActive={editActive} 
              setSideTask={setSideTask} 
              sideTask={sideTask} 
              removeTask={removeTask}/>) )}
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
                    onClick={() => saveHandler(group._id) || this.clearInput()} 
                    size="md" 
                    color="primary" 
                    className="m-2">
                    <i className="fa fa-save"></i> 
                  </button>
              </td>
              <th 
                colSpan={columns.length} 
                onDoubleClick={editHandler}> 
                <Input type="text" 
                  id={group._id} 
                  name="new" 
                  placeholder="name"  
                  disabled={disabled !== group._id} 
                  onBlur={() => saveHandler(group._id) || this.clearInput()}
                  onKeyDown={e => (e.keyCode === 13) && (saveHandler(group._id) || this.clearInput())}
                  onChange={(e) => this.localNew(e) || changeHandler(e, group._id)}
                  value={this.state.new}
                   />
              </th>
            </tr>
        </tbody>
  )
  }
}
