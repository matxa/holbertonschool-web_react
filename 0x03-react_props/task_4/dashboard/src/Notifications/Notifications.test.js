import Notifications from './Notifications';
import { clicked, imageStyle, closeIconStyle } from './Notifications';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import './Notifications.css'
import { shallow } from 'enzyme';
import React from 'react';
import { getLatestNotification } from '../utils/utils';

describe('Test various components of the Notifications', () => {

  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('NotificationItem renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    const list = (
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
      </ul>
    );
    expect(wrapper.contains(list)).toEqual(true);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const paragraph = (
      <p>Here is the list of notifications</p>
    );
    expect(wrapper.contains(paragraph)).toEqual(true);
  });

  it('menuItem is being displayed when displayDraw is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    const menuItem = (
      <div className="menuItem">Your notifications</div>
    );
    expect(wrapper.contains(menuItem)).toEqual(true);
  });

  it('menuItem is being displayed when displayDraw is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const menuItem = (
      <div className="menuItem">Your notifications</div>
    );
    expect(wrapper.contains(menuItem)).toEqual(true);
  });

  it('Notification is not being displayed when displayDraw is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    const notifications = (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button aria-label="Close" id="close" onClick={clicked} style={imageStyle}><img src={closeIcon} alt="close-icon" style={closeIconStyle}></img></button>
        <ul>
          <NotificationItem type="default" value="New course available"/>
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
        </ul>
      </div>
    );
    expect(wrapper.contains(notifications)).toEqual(false);
  });

  it('Notification is being displayed when displayDraw is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true}/>);
    const notifications = (
      <div className="Notifications">
        <p>Here is the list of notifications</p>
        <button aria-label="Close" id="close" onClick={clicked} style={imageStyle}><img src={closeIcon} alt="close-icon" style={closeIconStyle}></img></button>
        <ul>
          <NotificationItem type="default" value="New course available"/>
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
        </ul>
      </div>
    );
    expect(wrapper.contains(notifications)).toEqual(true);
  });
});
