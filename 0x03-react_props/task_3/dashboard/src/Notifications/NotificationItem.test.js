import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import { getLatestNotification } from '../utils/utils';

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
    console.log(notification.props())
    expect([
      notification.props()['data-notification-type'],
      notification.props()['dangerouslySetInnerHTML']['__html']
    ])
    .toEqual(['urgent', getLatestNotification(), ]);
  });
});
