import Notifications from './Notifications';
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
    const wrapper = shallow(<Notifications />);
    const header = (
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
      </ul>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    const header = (
      <p>Here is the list of notifications</p>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });
});
