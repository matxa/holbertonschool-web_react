import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

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
            <NotificationItem type="default" value="New course available"/>
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
          </ul>
        </div>
        :
        <div></div>
      }
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
}

Notifications.defaultProps = {
  displayDrawer: false
}
