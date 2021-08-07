import Notifications from './Notifications';
import { clicked, imageStyle, closeIconStyle } from './Notifications';
import closeIcon from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import './Notifications.css'
import { shallow } from 'enzyme';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import { listNotifications } from '../App/App';
import { StyleSheetTestUtils } from 'aphrodite';



describe('Test various components of the Notifications', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Notifications renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('NotificationItem renders without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const list = ([
      <NotificationItem type="default" value="New course available" />,
      <NotificationItem type="urgent" value="New resume available" />,
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
    ]);
    expect(wrapper.containsAllMatchingElements(list)).toEqual(true);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const paragraph = (
      <p>Here is the list of notifications</p>
    );
  });

  it('menuItem is being displayed when displayDraw is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false} listNotifications={listNotifications}/>);
    const menuItem = (
      <div>Your notifications</div>
    );
    expect(wrapper.containsMatchingElement(menuItem)).toEqual(true);
  });

  it('menuItem is not being displayed when displayDraw is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const menuItem = (
      <div>Your notifications</div>
    );
    expect(wrapper.containsMatchingElement(menuItem)).toEqual(false);
  });

  it('Notification is not being displayed when displayDraw is false', () => {
    const wrapper = shallow(<Notifications displayDrawer={false}/>);
    const list = ([
      <NotificationItem type="default" value="New course available" />,
      <NotificationItem type="urgent" value="New resume available" />,
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
    ]);
    expect(wrapper.containsAllMatchingElements(list)).toEqual(false);
  });

  it('Notification is being displayed when displayDraw is true', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications}/>);
    const list = ([
      <NotificationItem type="default" value="New course available" />,
      <NotificationItem type="urgent" value="New resume available" />,
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }} />
    ]);
    expect(wrapper.containsAllMatchingElements(list)).toEqual(true);
  });

  it('renders correctly if passed an empty array ', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={[]}/>);
    expect(wrapper.containsMatchingElement(
      <NotificationItem type="default" value="No new notification for now" />
    )).toEqual(true);
  });

  it('renders correctly if listNotifications is not passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.containsMatchingElement(
      <NotificationItem type="default" value="No new notification for now" />
    )).toEqual(true);
  });

  it('renders correctly if listNotifications is not passed', () => {
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    expect(wrapper.containsAllMatchingElements([
      <NotificationItem type="default" value="New course available"/>,
      <NotificationItem type="urgent" value="New resume available" />,
      <NotificationItem type="urgent" html={{ __html: getLatestNotification() }}/>
    ])).toEqual(true);
  });

  it('check if markAsRead function is printing the rigth message', () => {
    const spyOnConsoleLog = jest.spyOn(console, 'log');
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
    const instance = wrapper.instance();
    instance.markAsRead(2);
    expect(spyOnConsoleLog).toBeCalledTimes(1)
    expect(spyOnConsoleLog).toHaveBeenLastCalledWith('Notification 2 has been marked as read');
  });

  it('menuItem click calls handleDisplayDrawer', () => {
    const mockHandleDisplayDrawer = jest.fn();
    const wrapper = shallow(<Notifications listNotifications={listNotifications} handleDisplayDrawer={mockHandleDisplayDrawer} />);
    const spy = jest.spyOn(wrapper.instance().props, 'handleDisplayDrawer');
    wrapper.find('.menuItem').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
	});

  it('close button calls handleHideDrawer', () => {
    const mockHandleHideDrawer = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true} listNotifications={listNotifications} handleHideDrawer={mockHandleHideDrawer}/>);
    const spy = jest.spyOn(wrapper.instance().props, 'handleHideDrawer');
    wrapper.find('.Notifications button').simulate('click');
    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
	});

});
