import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  FormGroup,
  Input,
  Label,
} from 'reactstrap';
import placeholder from '../../assets/img/profile.png'

const roles = ['Bookkeeping', 'Sales', 'Pm', 'DevAdmin', 'Developer', 'Compliance', 'QA', 'Admin'];

function UserRow(props) {
  const { user, setRole } = props;
  const userLink = `/users/${user._id}`;

  return (
    <tr key={user._id}>
      <td className="text-left">
        <img 
          alt="profile" 
          src={user.image || placeholder}
          className="profile-icon"/>
        <Link to={userLink}>{`${user.firstName} ${user.lastName}`}</Link>
      </td>
      <td>{user.role}</td>
      <td>{user.customers.length}</td>
      <td>
        <FormGroup>
          <Label for="developer">Role</Label>
          <Input type="select" name="role" value={user.role} onChange={event => setRole(event, user)} id="developer">
            <option value="select">Select</option>
            { roles.map((data, index) => <option key={index} value={data}>{data}</option>) }
          </Input>
        </FormGroup>
      </td>
    </tr>
  );
}

UserRow.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
  setRole: PropTypes.func.isRequired,
};

export default UserRow;
