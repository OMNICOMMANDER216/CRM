import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const styles = {
    h2Style : {
        fontSize: '1em'
    },
    pointer: {
        cursor: "pointer"
    }
};

const Notification = ({notification, onClick}) => {
    return (
         <tbody> 
            <tr> 
                <td><h2 style={styles.h2Style} className=" col-5">{notification.title}</h2></td>
                <td> <p className = "f2 ">{notification.content} </p> </td>
                <td> <p ><Link className = "white i" to={'/customers/' + notification.cu}><i className="fa fa-eye" /></Link></p></td>
                <td>
                    <p style={styles.pointer}  onClick = {onClick}> <i className="fa fa-archive" /></p>
                </td>
            </tr>
         </tbody>
    );
};

Notification.propTypes = {
    notification: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired,
};

export default Notification;