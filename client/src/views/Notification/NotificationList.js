import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Table } from 'reactstrap';
import { isEmpty } from 'lodash';
import Notification from './Notification';
import * as userActions from '../../store/actions/usersActions';

const styles = {
  tableStyles: {
    textAlign: 'center',
  },
};

class NotificationList extends React.Component {

  onClick = (notification) => {
    this.props.userActions.archiveNotification(notification);
  }


  render() {
    const { user } = this.props;

    let notificationList = [];

    if (!isEmpty(user) && !isEmpty(user.notifications)) {
      // Map notifications to notificationLIst and sort by Not Read
      notificationList = !isEmpty(user.notifications) ? user.notifications.map(notification => (
        <Notification
          key={notification._id}
          notification={notification}
          onClick={() => this.onClick(notification)}
        />
      )).sort((a, b) => ((a === b) ? 0 : a ? -1 : 1)) : [];
    }

    if (notificationList.length) {
      return (
        <div className="white tl mt-5">
          <Table hover style={styles.tableStyles}>
            <thead>
              <tr>
                <th>Event</th>
                <th>message</th>
                <th>View Customer/Board</th>
                <th>Archive</th>
              </tr>
            </thead>
            {notificationList}
          </Table>
        </div>
      );
    }
    return (<h2> You have 0 Messages</h2>);
  }
}

NotificationList.propTypes = {
  userActions: PropTypes.object.isRequired,
  updateNotification: PropTypes.func,
  currentUser: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

function mapStateToProps(state, ownProps) {
  return {
    currentUser: state.auth.user,
    users: state.users,
    user: state.users.find(u => u._id === state.auth.user._id),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    userActions: bindActionCreators(userActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NotificationList);
