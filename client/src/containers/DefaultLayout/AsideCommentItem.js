import React from 'react';
import renderHTML from 'react-render-html';
import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
} from 'reactstrap';
import profile from '../../assets/img/profile.png';

const styles = {
  wrapper: {
    border: '2px solid #662c90',
    borderRadius: '10px',
    margin: '10px',
    padding: '2px',
    fontSize: '16px',
  },

  header: {
    backgroundColor: '#eee',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '2px',
    color: '#662c90',
  },

  icon: {
    fontSize: '1.5em',
    color: '#662c90',
  },
};
const AsideCommentItem = ({
  comment, editHandler, deleteHandler, currentUser, users,
}) => {
  const user = users.find(u => u._id === comment.author);

  return (
    <Card style={styles.wrapper} className="commentWrapper">
      <CardHeader style={styles.header}>
        <span>

          <img className="profileImg pr-2" alt="Comment Author" src={user.image ? user.image : profile} />

          {`${user.firstName} ${user.lastName}`}

        </span>
        {(currentUser._id === comment.author)
          && (
          <span>
            <button
              type="button"
              onClick={() => editHandler(comment)}
              size="md"
              color="primary"
              className="m-2"
            >
              <i className="fa fa-pencil" style={styles.icon} />
            </button>
            <button
              type="button"
              onClick={() => deleteHandler(comment)}
              size="md"
              color="primary"
              className="m-2"
            >
              <i className="fa fa-trash" style={styles.icon} />
            </button>
          </span>
          )
        }
      </CardHeader>
      <CardBody>
        { renderHTML(comment.body) }
      </CardBody>
    </Card>
  );
};

AsideCommentItem.propTypes = {
  comment: PropTypes.shape({}).isRequired,
  editHandler: PropTypes.func.isRequired,
  deleteHandler: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({

  }).isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({}),
  ).isRequired,
};

export default AsideCommentItem;
