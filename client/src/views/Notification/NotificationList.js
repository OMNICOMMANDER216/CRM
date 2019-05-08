import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Notification from "./Notification";
import * as userActions from "../../store/actions/usersActions";
import { Table } from 'reactstrap';

const styles = {
    tableStyles: {
        textAlign: 'center'
    }
};

class NotificationList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.onClick = this.onClick.bind(this);
  }

  onClick(notification) {
    this.props.userActions.archiveNotification(notification);
  }


  render() {
    const { currentUser, users } = this.props;    
    let user = users.find( user => user._id === currentUser._id);

    let notificationList = [];
  
    if(user && !!user.notifications[0]) {
      // Map notifications to notificationLIst and sort by Not Read
      notificationList = user.notifications ? user.notifications.map(notification => <Notification key={notification._id} notification={notification}  onClick = {() => this.onClick(notification)}/> ).sort((a, b) => (a === b)? 0 : a? -1 : 1 ) : [];
    }

    if(!!notificationList.length) {
      return (
      <div className="container-fluid white tl">
      <Table hover  style={styles.tableStyles}>
      <thead>
            <tr>
                <th>Event</th>
                <th>message</th>
                <th>View Customer</th>
                <th>Archive</th>
          </tr>
         </thead>
          {notificationList}
        </Table>
      </div>
      );
    } else {
      return (<h2> You have 0 Messages</h2>);
    }
  }
}

NotificationList.propTypes = {
  events: PropTypes.array,
  userActions: PropTypes.object.isRequired,
  updateNotification: PropTypes.func,
  currentUser: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.auth.user,
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationList);
