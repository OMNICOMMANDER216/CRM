import React from 'react';
import { Input, Badge } from 'reactstrap';
import inputTypeSelector from './inputTypeSelector';
import { AppAsideToggler } from '@coreui/react';
import getBadge from '../helpers/getBadge';
import isEmpty from 'lodash/isEmpty';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const styles = {
    menu: {
        boxShadow: '0 4px 17px 6px rgba(0, 0, 0, 0.1',
        backgroundColor: '#FFF',
        zIndex: '999'
    },
    span: {
        display: 'block'
    }
}


export default ( 
    index, 
    users, 
    current, 
    disabled, 
    changeHandler, 
    sideTask, 
    setSideTask, 
    currentTask, 
    editActive,
    isEditingHandler,
    saveHandler,
    removeTask) => {
    if (current.dataType === 'name' ) {
        return (
            <td key={index} >
                <ContextMenuTrigger id={index.toString()}>
                <span onClick={() => isEmpty(editActive) && setSideTask(currentTask)}>
                <AppAsideToggler 
                  className="d-md-down-none" 
                  disabled={(!isEmpty(sideTask) && (sideTask._id !== currentTask._id)) || !isEmpty(editActive)}>
                    <Input type={inputTypeSelector(current.dataType)} 
                        id={current._id} 
                        name={index} 
                        placeholder={current.title}  
                        disabled={disabled}
                        value = {current.value || undefined}
                        onChange={changeHandler} 
                        onKeyDown={(e) => (e.keyCode === 13) && saveHandler(currentTask)}
                        onBlur={() => saveHandler(currentTask)}
                        />
                </AppAsideToggler>
                </span>
                </ContextMenuTrigger>
                <ContextMenu id={index.toString()} style={styles.menu}>
                        <MenuItem data={{ action: 'Edit' }} onClick={() => isEditingHandler(currentTask)}>
                                <span  
                                    onClick={() => isEditingHandler(currentTask)} 
                                    size="md" 
                                    color="primary" 
                                    className="m-2"
                                    style={styles.span}>
                                    <AppAsideToggler 
                                        className="d-md-down-none" 
                                        disabled={isEmpty(sideTask)}>
                                        <i className="fa fa-pencil"></i> Edit
                                    </AppAsideToggler>
                                </span> 
                        </MenuItem>
                        
                        <MenuItem data={{ action: 'Save' }}>
                            <button type="submit" 
                                onClick={saveHandler} 
                                size="md" 
                                color="primary" 
                                className="m-2">
                                <i className="fa fa-save"></i> Save
                            </button> 
                        </MenuItem>

                        <MenuItem data={{ action: 'Remove' }}>
                            <button type="submit"  
                                onClick={() => window.confirm('Are you sure ?') && removeTask(currentTask)}
                                size="md" 
                                color="primary" 
                                className="m-2">
                                <i className="fa fa-trash"></i> Remove
                            </button>
                        </MenuItem>
                </ContextMenu>
            </td>
            )        
    }
    else if( current.dataType === 'last_updated' || current.dataType === 'date') {
        return (
            <td key={index}>
            <Input type={inputTypeSelector(current.dataType)} 
                id={current._id} 
                name={index} 
                placeholder={current.title}  
                disabled={disabled}
                value = {current.value || undefined}
                onChange={changeHandler} 
                onBlur={() => saveHandler(currentTask)}
                />
            </td>
            )
    }else if(current.dataType === 'status') {
        return (
            <td key={index}>
                <Badge color={getBadge(current.value)}>
                <Input 
                    type={inputTypeSelector(current.dataType)} 
                    name={index} 
                    id={current._id}
                    disabled={disabled}
                    onChange={changeHandler}
                    onBlur={() => saveHandler(currentTask)}                    
                    value={current.value}>
                    <option value=""></option>
                    {['Stuck', 'Working on it', 'Waiting for review', 'Waiting on Client', 'Done', 'Approved'].map(el => <option value={el} key={el}>{el}</option>)}
                </Input>
                </Badge>
            </td>)

    }else if(current.dataType === 'priority') {
        return (
            <td key={index}>
                <Badge color={getBadge(current.value)}>
                <Input 
                    type={inputTypeSelector(current.dataType)} 
                    name={index} 
                    id={current._id}
                    disabled={disabled }
                    onChange={changeHandler}
                    onBlur={() => saveHandler(currentTask)}
                    value={current.value}>
                    <option value=""></option>
                    { ['Low', 
                        'Medium', 
                        'High', 
                        'Urgent'
                        ].map(el => <option value={el} key={el}>{el}</option>) }
                </Input>
                </Badge>
            </td>)
    } else if(current.dataType === 'user') {
        return (
            <td key={index} >
            <span className="select-td">
            <img src="https://picsum.photos/200/300" alt="Smiley face" width="35" height="35"/>
            {/* <img src={current.value && users.find(u => u._id === current.value).image} alt="Smiley face" width="35" height="35"/> */}
                <Input 
                    type={inputTypeSelector(current.dataType)} 
                    name={index} 
                    id={current._id}
                    disabled={disabled }
                    onChange={changeHandler}
                    onBlur={() => saveHandler(currentTask)}                    
                    value={current.value}>
                    <option value=""></option>
                    {users.map(user => <option value={user._id} key={user._id}>
                        {user.firstName}
                    </option>)}
                </Input>
                </span>
            </td>)
    };
}