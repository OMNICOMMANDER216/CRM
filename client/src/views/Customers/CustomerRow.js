import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import getBadge from '../../helpers/getBadge';


function CustomerRow(props) {
  const {customer, deleteCustomer, isAdmin, isBookkeeping} = props;

  return (
    <tr key={customer._id}>
      <td>
        <Link 
          to={`/customers/${customer._id}`}>
            {customer.name}
        </Link>
      </td>
      <td>
        <a 
          target="_blank" 
          rel="noopener noreferrer" 
          href={`https://${customer.url}`}>
            {customer.url}
        </a>
      </td>
      <td>{customer.services.toString()}</td>
      <td>
        <Badge color={getBadge(customer.status)}>{customer.status}</Badge>
      </td>
      <td className="text-center">
        <Link 
          to={`/customers/${customer._id}`}>
            <i className="fa fa-eye"></i>
        </Link>
      </td>

      {(isAdmin || isBookkeeping) && 
      <td className="text-center">
        <Link 
          to={{ pathname : `/customer/edit/${customer._id}`, state: {customer: customer} }}>
            <i className="fa fa-edit"></i>
        </Link>
      </td>}

      {(isAdmin) && 
        <td className="text-center">
          <button 
            to="/customer" 
            onClick={(event) => window.confirm('Are You Sure ?') && deleteCustomer(event, customer._id)}>
              <i className="fa fa-trash"></i>
          </button>
        </td>
      }
      </tr>
  )
}

export default CustomerRow;