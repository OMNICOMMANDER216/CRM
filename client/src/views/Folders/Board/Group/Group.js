import React, { Suspense } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Card, CardBody, CardHeader, Row, Table } from 'reactstrap';
const TaskList = React.lazy(() => import('../Task/TaskList'));

const styles = {
  icon: {
    color: '#fff'
  },
  card: {
    minWidth: '100%'
  },
  contextMenu: {
    backgroundColor: '#FFF',
    padding: '1em'
  }
}
const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

const Group =  (props) => {
  const {group, users, columns, changeHandler, saveHandler, isEditingHandler, editActive, editHandler, setSideTask, sideTask, taskFilter, removeTask, removeColumnHandler, disabled} = props;


  return (
    <React.Fragment>
    <div>
    <Row className="full-width">
      <Card style={styles.card}>
        <CardHeader>
        <ContextMenuTrigger id={(group && group._id) || 'test'}>
          <i className="fa fa-align-justify"></i>  <h3> {group && group.title} </h3>
          </ContextMenuTrigger>

          <ContextMenu id={(group && group._id) || "test"} style={styles.contextMenu}>
            <MenuItem data={{foo: 'bar'}} >
              ContextMenu Item 1
            </MenuItem>
            <MenuItem data={{foo: 'bar'}} >
              ContextMenu Item 2
            </MenuItem>
            <MenuItem divider />
            <MenuItem data={{foo: 'bar'}} >
              ContextMenu Item 3
            </MenuItem>
          </ContextMenu>
        </CardHeader>
        <CardBody>
        <Suspense fallback={loading()}>
          <Table hover bordered striped responsive size="sm">
            <thead>
            <tr>
              <th>edit/Remove</th>
              {columns && columns.map((col, id) => <th key={id}>{col.title} <button onClick={() => window.confirm('Are you sure ?') && removeColumnHandler(col._id)} style={styles.icon}><i  className="fa fa-trash ml-2"></i></button> </th>) }
            </tr>
            </thead>
            <TaskList 
              tasks={group && group.tasks} 
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
          </Suspense>
          </CardBody>
        </Card>
      </Row>
    </div>
    </React.Fragment>
  )
}

export default Group;