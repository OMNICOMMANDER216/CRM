import React from 'react';
import { Link } from 'react-router-dom';
import {
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

function UserRow(props) {
  const { user, setRole } = props;
  const userLink = `/users/${user._id}`;

  return (
    <tr key={user._id}>
      <td><Link to={userLink}>{`${user.firstName} ${user.lastName}`}</Link></td>
      <td>{user.role}</td>
      <td>{user.customers.length}</td>
      <td>
        <FormGroup>
          <Label for="developer">Role</Label>
          <Input type="select" name="role" value={user.role} onChange={event => setRole(event, user)} id="developer">
            <option value="select">Select</option>
            {
                    ['Bookkeeping', 'Sales', 'Pm', 'DevAdmin', 'Developer', 'Compliance', 'Admin'].map((data, index) => <option key={index} value={data}>{data}</option>)
                      }
          </Input>
        </FormGroup>
      </td>
    </tr>
  );
}

export default UserRow;
