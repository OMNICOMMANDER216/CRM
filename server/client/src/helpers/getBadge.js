export default function(status) {
    return status === 'Live' ? 'success' :
      status === 'QA' ? 'secondary' :
      status === 'Assigned' ? 'warning' :
      status === 'Paid' ? 'primary' :
      status === 'Low' ? 'primary' :
      status === 'Medium' ? 'secondary' :
      status === 'High' ? 'warning' :
      status === 'Urgent' ? 'danger' :
      status === 'Stuck' ? 'danger' :
      status === 'Working on it' ? 'info' :
      status === 'Waiting for review' ? 'primary' :
      status === 'Waiting on Client' ? 'warning' :
      status === 'Done' ? 'secondary' :
      status === 'Approved' ? 'success' :
      'danger';
}