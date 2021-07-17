import React from 'react';
import closeIcon from '../assets/close-icon.png';
import './Notifications.css';
import { getLatestNotification } from '../utils/utils';

function clicked() {
  console.log("Close button has been clicked");
}

const closeIconStyle = {
  height: "10px",
  width: "10px"
}

const imageStyle = {
  position: "absolute",
  right: "15px",
  top: "15px",
  border: "none",
  background: "none"
}

export default function Notifications() {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <button aria-label="Close" id="close" onClick={clicked} style={imageStyle}><img src={closeIcon} alt="close-icon" style={closeIconStyle}></img></button>
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    </div>
  );
}
