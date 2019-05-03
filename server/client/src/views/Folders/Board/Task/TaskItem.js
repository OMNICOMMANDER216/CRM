import React, { Fragment } from 'react';
import { Input } from 'reactstrap';
import inputBuilder from '../../../../helpers/inputBuilder';
import { AppAsideToggler } from '@coreui/react';

export default ({task, users, isEditableHandler, saveHandler, changeHandler, editActive}) => {
  return (
    <Fragment>
        <tr className="active">
          <td className="edit">
          { (editActive._id !== task._id) &&
            <button type="submit" 
              onClick={() => isEditableHandler(task)} 
              size="md" 
              color="primary" 
              className="m-2">
              <i className="fa fa-pencil"></i> 
            </button> 
          }
          { (editActive._id === task._id) &&
            <button type="submit" 
              onClick={saveHandler} 
              size="md" 
              color="primary" 
              className="m-2">
              <i className="fa fa-save"></i> 
            </button> 
          }
            <button type="submit"  
              size="md" 
              color="primary" 
              className="m-2">
              <i className="fa fa-trash"></i> 
            </button>
            <AppAsideToggler className="d-md-down-none " ><i className="fa fa-eye"></i></AppAsideToggler>
          </td>
          { task.column && 
            task.column.map((col, i) => inputBuilder(i, users, col, (editActive._id !== task._id), isEditableHandler, changeHandler)) 
            }
        </tr>
        <tr className="spacer"></tr>
    </Fragment>

    /* <td key={i}> <Input type="text" id="name" name={i} placeholder={col.title}  disabled={editActive !== task._id}  value={col.value} /></td> */
  )
}