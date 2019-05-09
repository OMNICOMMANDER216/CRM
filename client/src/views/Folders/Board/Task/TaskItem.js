import React, { Fragment } from 'react';
import inputBuilder from '../../../../helpers/inputBuilder';
import { AppAsideToggler } from '@coreui/react';
import isEmpty from 'lodash/isEmpty';

export default ({task, users, isEditingHandler, saveHandler, changeHandler, editActive, setSideTask, sideTask, removeTask}) => {

  return (
    <Fragment>
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
              onClick={() => removeTask(task)}
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
        <tr className="spacer"></tr>
    </Fragment>

    /* <td key={i}> <Input type="text" id="name" name={i} placeholder={col.title}  disabled={editActive !== task._id}  value={col.value} /></td> */
  )
}