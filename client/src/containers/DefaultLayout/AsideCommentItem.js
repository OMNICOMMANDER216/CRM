import React from 'react'
import renderHTML from 'react-render-html';
import {
  Card,
  CardHeader,
  CardBody
} from "reactstrap";
import profile from '../../assets/img/profile.png'
const styles = {
    wrapper: {
        border: '2px solid #662c90',
        borderRadius: '10px',
        margin: '10px',
        padding: '2px',
        fontSize: '16px'
    },

    header: {
        backgroundColor: '#eee',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '2px',
        color: '#662c90'
    },

    icon: {
      fontSize: '1.5em',
      color: '#662c90',
    }
}
export default ({comment, editHandler, deleteHandler, currentUser, users}) => {
  const user = users.find(u => u._id === comment.author);

  return (
    <Card style={styles.wrapper} className="commentWrapper">
      <CardHeader style={styles.header}>
        <span > <img className="profileImg" alt="Comment Author" src={user.image ? user.image : profile } /> {`${user.firstName} ${user.lastName}`} </span>
        <span>
        <button 
            onClick={() => editHandler(comment)} 
            size="md" 
            color="primary" 
            className="m-2">
            <i className="fa fa-pencil" style={styles.icon}></i> 
          </button> 
          <button 
            onClick={() => deleteHandler(comment)}
            size="md" 
            color="primary" 
            className="m-2">
            <i className="fa fa-trash" style={styles.icon}></i> 
          </button>
        </span>
    </CardHeader>
    <CardBody>
      { renderHTML(comment.body) }
    </CardBody>
  </Card>
  )
}
