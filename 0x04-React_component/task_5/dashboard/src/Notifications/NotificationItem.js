import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = React.memo((props) => {
  return (
    <li
      data-notification-type={props.type}
      dangerouslySetInnerHTML={props.html}
      onClick={props.markAsRead}
    >{props.value}</li>
  );
});

NotificationItem.propTypes = {
  html: PropTypes.shape({ __html: PropTypes.string }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
}

NotificationItem.defaultProps = {
  type: 'default'
}

export default NotificationItem;
