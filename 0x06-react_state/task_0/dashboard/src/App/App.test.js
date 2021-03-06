import App, { listNotifications } from './App';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { shallow } from 'enzyme';
import React from 'react';
import CourseList from '../CourseList/CourseList';
import { StyleSheetTestUtils } from 'aphrodite';



describe('Test various components of the App', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders all components but Notifications', () => {
    const app = shallow(<App />);

    expect(app.containsAllMatchingElements([
      <Header />,
      <Login />,
      <Footer />
    ])).toEqual(true);
  });

  it('does not render Login if user is logged in', () => {
    const app = shallow(<App isLoggedIn={true}/>);
    expect(app.containsAllMatchingElements([
      <Login />
    ])).toEqual(false);
  });
  
  it('does not render CourseList if user is not logged in', () => {
    const app = shallow(<App isLoggedIn={false}/>);
    expect(app.containsAllMatchingElements([
      <CourseList />
    ])).toEqual(false);
  });

  it("state.displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().displayDrawer).toBe(false);
  });

  it("handleDisplayDrawer -> the state.displayDrawer is true", () => {
    const wrapper = shallow(<App />);
    wrapper.instance().handleDisplayDrawer();
    expect(wrapper.state().displayDrawer).toBe(true);
  });

  it("handleHideDrawer -> the state.displayDrawer is false", () => {
    const wrapper = shallow(<App />);
    wrapper.setState({ displayDrawer: true });
    wrapper.instance().handleHideDrawer();
    expect(wrapper.state().displayDrawer).toBe(false);
  });
  
});
