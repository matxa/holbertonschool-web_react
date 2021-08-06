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
    },
    li: {
      '@media (max-width: 900px)': {
        borderBottom: '1px solid black',
        padding: 10,
      },
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
      className={ type && props.type === 'default' ? css(styles.default, styles.li) : css(styles.urgent, styles.li) }
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
