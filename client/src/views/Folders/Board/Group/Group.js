import React from 'react';
import { Input, Card, CardBody, CardHeader, Row, Table } from 'reactstrap';
const TaskList = React.lazy(() => import('../Task/TaskList'));

const styles = {
  icon: {
    color: '#fff'
  },
  card: {
    minWidth: '100%'
  }
}

export default (props) => {
  const {group, users, columns, changeHandler, saveHandler, isEditingHandler, editActive, editHandler, setSideTask, sideTask, taskFilter, removeTask, removeColumnHandler, disabled} = props;


  return (
    <React.Fragment>
    <div>
    <Row className="full-width">
      <Card style={styles.card}>
        <CardHeader>
          <i className="fa fa-align-justify"></i>  <h3> {group.title} </h3>
        </CardHeader>
        <CardBody>
          <Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>edit/Remove</th>
              { columns.map((col, id) => <th key={id}>{col.title} <button onClick={() => removeColumnHandler(col._id)} style={styles.icon}><i  className="fa fa-trash ml-2"></i></button> </th>) }
            </tr>
            </thead>
            <TaskList 
              tasks={group.tasks} 
              group={group}
              columns={columns}
              users={users}
              isEditingHandler={isEditingHandler}
              saveHandler={saveHandler} 
              changeHandler={changeHandler} 
              editActive={editActive} 
              setSideTask={setSideTask} 
              sideTask={sideTask} 
              taskFilter={taskFilter} 
              editHandler={editHandler} 
              disabled={disabled} 
              removeTask={removeTask}/>
          </Table>
          </CardBody>
        </Card>
      </Row>
    </div>
    </React.Fragment>
  )
}