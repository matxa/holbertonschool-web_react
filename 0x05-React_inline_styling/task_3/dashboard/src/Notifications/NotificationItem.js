import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const NotificationItem = React.memo((props) => {
  let type = false
  const styles = StyleSheet.create({
    urgent: {
      color: 'red',
    },
    default: {
      color: 'blue',
    }
  });

  if (props.type === 'default' || props.type === 'urgent') {
    type = true;
  }

  return (
    <li
      data-notification-type={props.type}
      dangerouslySetInnerHTML={props.html}
      onClick={props.markAsRead}
      className={ type && props.type === 'default' ? css(styles.default) : css(styles.urgent) }
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
