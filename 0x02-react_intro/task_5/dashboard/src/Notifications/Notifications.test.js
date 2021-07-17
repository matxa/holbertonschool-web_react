import Notifications from './Notifications';
import './Notifications.css'
import { shallow } from 'enzyme';
import React from 'react';
import { getLatestNotification } from '../utils/utils';

describe('Test various components of the Notifications', () => {

  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const header = (
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
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
