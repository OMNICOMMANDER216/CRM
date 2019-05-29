import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from 'reactstrap';
import getBadge from '../../helpers/getBadge';
import getIcons from '../../helpers/getIcons';


function CustomerRow(props) {
  const {
    customer, deleteCustomer, isAdmin, isBookkeeping,
  } = props;

  return (
    <tr key={customer._id} className="text-left">
      <td className="text-left">
        <Link
          to={`/customers/${customer._id}`}
        >
          {customer.name}
        </Link>
      </td>
      <td>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://${customer.url}`}
        >
          {customer.url}
        </a>
      </td>
      <td className="text-left">{customer.services.map(s => getIcons(s))}</td>
      <td>
        <Badge color={getBadge(customer.status)}>{customer.status}</Badge>
      </td>
      <td className="text-center">
        <Link
          to={`/customers/${customer._id}`}
        >
          <i className="fa fa-eye" />
        </Link>
      </td>

      {(isAdmin || isBookkeeping)
      && (
      <td className="text-center">
        <Link
          to={{ pathname: `/customer/edit/${customer._id}`, state: { customer } }}
        >
          <i className="fa fa-edit" />
        </Link>
      </td>
      )}

      {(isAdmin)
        && (
        <td className="text-center">
          <button
            to="/customer"
            onClick={event => window.confirm('Are You Sure ?') && deleteCustomer(event, customer._id)}
          >
            <i className="fa fa-trash" />
          </button>
        </td>
        )
      }
    </tr>
  );
}

export default CustomerRow;
