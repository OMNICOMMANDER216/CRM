import React from 'react';
import { Input, Badge } from 'reactstrap';
import inputTypeSelector from './inputTypeSelector';
import { AppAsideToggler } from '@coreui/react';
import getBadge from '../helpers/getBadge';
import isEmpty from 'lodash/isEmpty';


export default ( index, users, current, disabled, saveHandler, changeHandler, sideTask, setSideTask, currentTask, editActive) => {
    if (current.dataType === 'name' ) {
        return (
            <td key={index}>
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
                        onChange={changeHandler} />
                </AppAsideToggler>
                </span>
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
                onChange={changeHandler} />
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
                    value={current.value}>
                    <option value=""></option>
                    { ['Low', 'Medium', 'High', 'Urgent'].map(el => <option value={el} key={el}>{el}</option>) }
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