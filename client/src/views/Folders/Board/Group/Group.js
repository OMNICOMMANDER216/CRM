import React, { Suspense } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { Card, CardBody, CardHeader, Row, Table } from 'reactstrap';
import ReactTooltip from 'react-tooltip';

const TaskList = React.lazy(() => import('../Task/TaskList'));

const styles = {
  icon: {
    color: '#fff'
  },
  card: {
    minWidth: '100%',
    boxShadow: '0 0 10px #000',
    marginTop: '2em'
  },
  contextMenu: {
    backgroundColor: '#FFF',
    padding: '1em'
  }
}
const loading = () => (
  <div 
    className="animated fadeIn pt-1 text-center">
      Loading...
  </div>)

export default (props) => {
  const {
    group, 
    users, 
    columns, 
    changeHandler, 
    saveHandler, 
    removeGroup, 
    renameGroup, 
    isEditingHandler, 
    editActive, 
    editHandler, 
    setSideTask, 
    sideTask, 
    taskFilter, 
    removeTask, 
    removeColumnHandler, 
    disabled} = props;

  return (
    <React.Fragment>
      <Row className="full-width">
        <Card style={styles.card}>
          <CardHeader>
            <ContextMenuTrigger id={(group && group._id) || 'test'}>
              <h3>
                <i className="fa fa-align-justify"/> 
                {group && group.title} 
              </h3>
            </ContextMenuTrigger>

            <ContextMenu id={(group && group._id) || "test"} style={styles.contextMenu}>
              <MenuItem data={{foo: 'bar'}} >
                <button 
                  onClick={() => window.confirm('Are you sure') && removeGroup(group._id)} type="button">
                  <i className="fa fa-trash fa-lg mr-2 mb-2 red" />
                    Delete
                </button>
              </MenuItem>
              <MenuItem data={{edit: 'group'}} >
              <button onClick={() => renameGroup(group)} type="button">
                <i className="fa fa-pencil fa-lg mr-2 pt-2" />
                Edit
              </button>
              </MenuItem>
              <MenuItem divider />
            </ContextMenu>
          </CardHeader>
          <CardBody>
            <Suspense fallback={loading()}>
              <Table hover bordered striped responsive size="sm">
                <thead>
                <tr>
                  <th>edit/Remove</th>
                  {columns && columns.map((col, id) => (
                    <th key={id}>
                      {col.title} 
                      <button 
                        onClick={() => window.confirm('Are you sure ?') && removeColumnHandler(col._id)} 
                        style={styles.icon}
                        data-tip="remove Column"
                        >
                        <i  className="fa fa-trash ml-2"></i>
                      </button> 
                    </th>)) }
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
              <ReactTooltip />
            </Suspense>
          </CardBody>
        </Card>
      </Row>
    </React.Fragment>
  )
}
