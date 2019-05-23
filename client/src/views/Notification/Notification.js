import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
  h2Style: {
    fontSize: '1em',
  },
  pointer: {
    cursor: 'pointer',
  },
};

const Notification = ({ notification, onClick }) => (
  <tbody>
    <tr>
      <td>
        <h2 style={styles.h2Style} className=" col-5">
          {notification.title}
        </h2>
      </td>
      <td>
        <p className="f2 ">
          {notification.content}

        </p>
      </td>
      <td>
        <p>
          {/** If customer related */}
          {notification.cu && (
          <Link
            className="white i"
            to={`/customers/${notification.cu}`}
          >
            <i className="fa fa-eye" />
          </Link>
          )}

          {/** If Board related */}
          {notification.board && (
          <Link
            className="white i"
            to={`/board/${notification.board}`}
          >
            <i className="fa fa-eye" />
          </Link>
          )}
        </p>
      </td>
      <td>
        <span style={styles.pointer} onClick={onClick}>
          <i className="fa fa-archive" />
        </span>
      </td>
    </tr>
  </tbody>
);

Notification.propTypes = {
  notification: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Notification;
