import App, { listNotifications } from './App';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { shallow } from 'enzyme';
import React from 'react';
import CourseList from '../CourseList/CourseList';

describe('Test various components of the App', () => {

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders all components', () => {
    const app = shallow(<App />);

    expect(app.containsAllMatchingElements([
      <Notifications displayDrawer={false} listNotifications={listNotifications} />,
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
});
