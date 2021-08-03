import React, { Component } from 'react';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

export function clicked() {
  console.log("Close button has been clicked");
}

export const closeIconStyle = {
  height: "10px",
  width: "10px"
}

export const imageStyle = {
  position: "absolute",
  right: "15px",
  top: "15px",
  border: "none",
  background: "none"
}

export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  static propTypes = {
    displayDrawer: PropTypes.bool,
    listNotifications: PropTypes.arrayOf(NotificationItemShape),
  }
  
  static defaultProps = {
    displayDrawer: false,
    listNotifications: []
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length)
      return true;
    return false;
  }

  styles = StyleSheet.create({
    menuItem: {
      position: 'absolute',
      top: 15,
      right: 5,
    },
    Notifications: {
      position: 'absolute',
      top: 40,
      right: 5,
      border: '1px dashed #e0344c',
      padding: 20,
      width: 400,
      backgroundColor: 'white',
      zIndex: 1000,
      '@media (max-width: 900px)': {
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        height: '100vh',
        fontSize: 20,
        listStyle: 'none',
        padding: 0,
        border: 'none',
      },
    },
    ul: {
      '@media (max-width: 900px)': {
        padding: 0,
        listStyle: 'none',
      },
    }
  });

  render() {
    return (
      <div>
        <div className={css(this.styles.menuItem)}>Your notifications</div>
        {
          this.props.displayDrawer
          ? 
          <div className={css(this.styles.Notifications)}>
            <p>Here is the list of notifications</p>
            <button aria-label="Close" id="close" onClick={clicked} style={imageStyle}><img src={closeIcon} alt="close-icon" style={closeIconStyle}></img></button>
            <ul className={css(this.styles.ul)}>
              {
                this.props.listNotifications.length > 0
                ?
                this.props.listNotifications.map((notification) => { 
                  return <NotificationItem
                    key={notification.id}
                    type={notification.type}
                    value={notification.value}
                    html={notification.html}
                    markAsRead={() => { this.markAsRead(notification.id) }}
                  />
                })
                :
                <NotificationItem type="default" value="No new notification for now" />
              }
            </ul>
          </div>
          :
          <div></div>
        }
      </div>
    );
  }
}
