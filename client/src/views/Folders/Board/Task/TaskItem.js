import React, { Component } from 'react';
import { DragSource } from 'react-dnd'
import inputBuilder from '../../../../helpers/inputBuilder';
import { AppAsideToggler } from '@coreui/react';
import isEmpty from 'lodash/isEmpty';


const itemSource = {
  beginDrag(props) {
    return props.item
  },
  endDrag(props, monitor, component) {
    return props.handleDrop(props.item.id);
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }
}

class TaskItem extends Component {
  render(){
    const { task, users, isEditingHandler, saveHandler, changeHandler, editActive, setSideTask, sideTask, removeTask, connectDragSource } = this.props;

    return connectDragSource(
          <tr className="active">
            <td className="edit">
            { (editActive._id !== task._id) && (
              
              <span  
                onClick={() => isEditingHandler(task)} 
                size="md" 
                color="primary" 
                className="m-2">
                <AppAsideToggler className="d-md-down-none" disabled={isEmpty(sideTask)}><i className="fa fa-pencil"></i></AppAsideToggler>
              </span> 
            )}
            { (editActive._id === task._id) && (
              <button type="submit" 
                onClick={saveHandler} 
                size="md" 
                color="primary" 
                className="m-2">
                <i className="fa fa-save"></i> 
              </button> 
            )}
              <button type="submit"  
                onClick={() => window.confirm('Are you sure') && removeTask(task)}
                size="md" 
                color="primary" 
                className="m-2">
                <i className="fa fa-trash"></i> 
              </button>
              {isEmpty(editActive) && (
                <AppAsideToggler 
                  className="d-md-down-none" 
                  disabled={!isEmpty(sideTask) && (sideTask._id !== task._id)}>
                  <i  onClick={() => setSideTask(task)} className="fa fa-eye"></i>
                </AppAsideToggler>
              )}
            </td>
            { task.column && (
              task.column.map((col, i) => inputBuilder(i, users, col, (editActive._id !== task._id), isEditingHandler, changeHandler)) 
            )}
          </tr>
    )
  }
}

export default DragSource('Item', itemSource, collect)(TaskItem);