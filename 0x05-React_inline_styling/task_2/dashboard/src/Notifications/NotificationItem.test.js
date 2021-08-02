import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';
import Notifications from './Notifications';

describe('Test NotificationItem', () => {
  it('Test NotificationItem renders without crashing', () => {
    shallow(<NotificationItem />)
  });

  it('Test NotificationItem renders the right value and type', () => {
    const notification = shallow(<NotificationItem type="default" value="dummy test" />);
    expect([
      notification.props()['data-notification-type'],
      notification.text(),
    ])
    .toEqual([ 'default', 'dummy test' ]);
  });

  it('Test NotificationItem renders the right html', () => {
    const notification = shallow(<NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>);
    expect([
      notification.props()['data-notification-type'],
      notification.props()['dangerouslySetInnerHTML']['__html']
    ])
    .toEqual(['urgent', getLatestNotification(), ]);
  });

  it('click on the component, called with the right ID argument', () => {
    const wrapper = shallow(<Notifications />);
    const notificationInstance = wrapper.instance();
    const spyOnMarkAsReadFunc = jest.spyOn(notificationInstance, 'markAsRead');
    notificationInstance.markAsRead(3);
    expect(spyOnMarkAsReadFunc).toBeCalledTimes(1);
    expect(spyOnMarkAsReadFunc).toHaveBeenLastCalledWith(3);
  });
  
});
