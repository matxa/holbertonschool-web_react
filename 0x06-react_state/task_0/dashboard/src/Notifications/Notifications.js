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
    handleDisplayDrawer: PropTypes.func,
    handleHideDrawer: PropTypes.func
  }

  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => {},
    handleHideDrawer: () => {}
  }

  markAsRead = (id) => {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.listNotifications.length > this.props.listNotifications.length
       || nextProps.displayDrawer != this.props.displayDrawer)
      return true;
    return false;
  }

  opacityKeyframes = {
    'from': {
        opacity: 0.5,
    },
 
    'to': {
        opacity: 1,
    }
  };

  translateKeyframes = {
    '0': {
      transform: 'translateY(0)',
    },
    '50%': {
        transform: 'translateY(-5px)',
    },
 
    '100%': {
        transform: 'translateY(5px)',
    },
  };

  styles = StyleSheet.create({
    menuItem: {
      position: 'absolute',
      top: 15,
      right: 5,
      ':hover': {
        cursor: 'pointer',
        animationName: [this.translateKeyframes, this.opacityKeyframes],
        animationDuration: '1s, 0.5s',
        animationIterationCount: 3,
      },
    },
    Notifications: {
      position: 'absolute',
      top: 40,
      right: 5,
      border: '1px dashed #e0344c',
      padding: 20,
      width: 400,
      backgroundColor: '#fff8f8',
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

    const { displayDrawer, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div>
        {
          displayDrawer ? '' :
          <div
            className={ css(this.styles.menuItem) }
            onClick={ handleDisplayDrawer }
          >Your notifications</div>
        }
        {
          this.props.displayDrawer
          ? 
          <div className={css(this.styles.Notifications)}>
            <p>Here is the list of notifications</p>
            <button
              aria-label="Close"
              id="close"
              onClick={ handleHideDrawer }
              style={imageStyle}
            >
              <img src={closeIcon} alt="close-icon" style={closeIconStyle}></img>
            </button>
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
