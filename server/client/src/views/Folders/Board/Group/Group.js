import React from 'react';
import { Input, Card, CardBody, CardHeader, Row, Table } from 'reactstrap';
const TaskList = React.lazy(() => import('../Task/TaskList'));

export default (props) => {
  const {group, users, columns, changeHandler, saveHandler, isEditableHandler, editActive, editHandler, disabled} = props;


  return (
    <React.Fragment>
    <div>
    <Row>
      <Card className="full-width ">
        <CardHeader>
          <i className="fa fa-align-justify"></i>  <h3> {group.title} </h3>
        </CardHeader>
        <CardBody>
          <Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>edit/Remove</th>
              { columns.map((col) => <th key={col._id}>{col.title}</th>) }
            </tr>
            </thead>
            <tbody>
            <TaskList tasks={group.tasks} users={users} isEditableHandler={isEditableHandler}saveHandler={saveHandler} changeHandler={changeHandler} editActive={editActive}/>
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
          </Table>
          </CardBody>
        </Card>
      </Row>
    </div>
    </React.Fragment>
  )
}