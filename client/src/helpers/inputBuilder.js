/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Input, Badge } from 'reactstrap';
import { AppAsideToggler } from '@coreui/react';
import isEmpty from 'lodash/isEmpty';
import { ContextMenu, MenuItem, ContextMenuTrigger } from 'react-contextmenu';
import Image from 'react-image-resizer';
import getBadge from './getBadge';
import inputTypeSelector from './inputTypeSelector';
import imagePlaceholder from '../assets/img/profile.png';

const styles = {
  menu: {
    boxShadow: '0 4px 17px 6px rgba(0, 0, 0, 0.1',
    backgroundColor: '#FFF',
    zIndex: '999',
  },
  span: {
    display: 'block',
  },
  select: {
    marginLeft: '10px',
    height: '40px',
    lineHeight: 'initial',
  },
};


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
  removeTask,
) => {
  if (current.dataType === 'name') {
    return (
      <td key={index}>
        <ContextMenuTrigger id={index.toString()}>
          <span
            onClick={() => isEmpty(editActive) && setSideTask(currentTask)}
          >
            <AppAsideToggler
              disabled={(!isEmpty(sideTask) && (sideTask._id !== currentTask._id)) || !isEmpty(editActive)}
            >
              <Input
                type={inputTypeSelector(current.dataType)}
                id={current._id}
                name={index}
                placeholder={current.title}
                disabled={disabled}
                value={current.value || undefined}
                onChange={changeHandler}
                onKeyDown={e => (e.keyCode === 13) && saveHandler(currentTask)}
                onBlur={() => saveHandler(currentTask)}

              />
            </AppAsideToggler>
          </span>
        </ContextMenuTrigger>
        <ContextMenu id={index.toString()} style={styles.menu}>
          <MenuItem
            data={{ action: 'Edit' }}
            onClick={() => isEditingHandler(currentTask)}
          >
            <span
              onClick={() => isEditingHandler(currentTask)}
              size="md"
              color="primary"
              className="m-2"
              style={styles.span}
            >
              <AppAsideToggler
                className="d-md-down-none"
                disabled={isEmpty(sideTask)}
              >
                <i className="fa fa-pencil" />
                Edit
              </AppAsideToggler>
            </span>
          </MenuItem>

          <MenuItem data={{ action: 'Save' }}>
            <button
              type="submit"
              onClick={saveHandler}
              size="md"
              color="primary"
              className="m-2"
            >
              <i className="fa fa-save" />
              Save
            </button>
          </MenuItem>

          <MenuItem data={{ action: 'Remove' }}>
            <button
              type="submit"
              onClick={() => window.confirm('Are you sure ?') && removeTask(currentTask)}
              size="md"
              color="primary"
              className="m-2"
            >
              <i className="fa fa-trash" />
              Remove
            </button>
          </MenuItem>
        </ContextMenu>
      </td>
    );
  }
  if (current.dataType === 'last_updated' || current.dataType === 'date' || current.dataType === 'text') {
    return (
      <td key={index}>
        <Input
          type={inputTypeSelector(current.dataType)}
          id={current._id}
          name={index}
          placeholder={current.title}
          disabled={disabled}
          value={current.value || undefined}
          onChange={changeHandler}
        />
      </td>
    );
  } if (current.dataType === 'status') {
    return (
      <td key={index}>
        <Badge color={getBadge(current.value)}>
          <Input
            type={inputTypeSelector(current.dataType)}
            name={index}
            id={current._id}
            disabled={disabled}
            onChange={changeHandler}
            value={current.value}
          >
            <option value="" />
            {['Stuck',
              'Working on it',
              'Waiting for review',
              'Waiting on Client',
              'Done',
              'Approved'].map(el => <option value={el} key={el}>{el}</option>)}
          </Input>
        </Badge>
      </td>
    );
  } if (current.dataType === 'priority') {
    return (
      <td key={index}>
        <Badge color={getBadge(current.value)}>
          <Input
            type={inputTypeSelector(current.dataType)}
            name={index}
            id={current._id}
            disabled={disabled}
            onChange={changeHandler}
            value={current.value}
          >
            <option value="" />
            { ['Low',
              'Medium',
              'High',
              'Urgent',
            ].map(el => <option value={el} key={el}>{el}</option>) }
          </Input>
        </Badge>
      </td>
    );
  } if (current.dataType === 'invoice') {
    return (
      <td key={index}>
        <Badge color={getBadge(current.value)}>
          <Input
            type={inputTypeSelector(current.dataType)}
            name={index}
            id={current._id}
            disabled={disabled}
            onChange={changeHandler}
            value={current.value}
          >
            <option value="" />
            { ['Not Sent',
              'Sent',
              'Paid',
              'Override',
            ].map(el => <option value={el} key={el}>{el}</option>) }
          </Input>
        </Badge>
      </td>
    );
  } if (current.dataType === 'user') {
    const selectedUser = users.find(u => u._id === current.value);
    //  limits options to 'Admin', 'Developer', 'Pm'
    users = users.filter(u => ['Admin', 'Developer', 'Pm'].includes(u.role));
    return (
      <td key={index}>
        <span className="select-td">
          {(selectedUser && selectedUser.image)
            ? (
              <Image
                src={selectedUser.image.replace('/photo.jpg', '/s40-c-mo/photo.jpg')}
                className="round-image"
                alt="Smiley face"
                height={40}
                width={40}
              />
            )
            : (
              <Image
                src={imagePlaceholder.replace('/photo.jpg', '/s40-c-mo/photo.jpg')}
                className="round-image"
                alt="Smiley face"
                height={40}
                width={40}
              />
            )
            }
          <Input
            type={inputTypeSelector(current.dataType)}
            name={index}
            id={current._id}
            disabled={disabled}
            onChange={changeHandler}
            value={current.value}
            style={styles.select}
          >
            <option value="" />
            {users.map(user => (
              <option value={user._id} key={user._id}>
                {user.firstName}
              </option>
            ))}
          </Input>
        </span>
      </td>
    );
  }
};
