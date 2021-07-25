import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

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

export default function Notifications(props) {
  return (
    <div>
      <div className="menuItem">Your notifications</div>
      {
        props.displayDrawer
        ? 
        <div className="Notifications">
          <p>Here is the list of notifications</p>
          <button aria-label="Close" id="close" onClick={clicked} style={imageStyle}><img src={closeIcon} alt="close-icon" style={closeIconStyle}></img></button>
          <ul>
            {
              props.listNotifications.length > 0
              ?
              props.listNotifications.map((notification) => { 
                return <NotificationItem key={notification.id} type={notification.type} value={notification.value} html={notification.html} />
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}
