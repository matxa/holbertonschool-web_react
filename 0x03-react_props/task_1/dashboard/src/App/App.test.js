import App from './App';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import { shallow } from 'enzyme';
import React from 'react';

describe('Test various components of the App', () => {

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders all components', () => {
    const app = shallow(<App />);

    expect(app.containsAllMatchingElements([
      <Notifications />,
      <Header />,
      <Login />,
      <Footer />
    ])).toEqual(true);
  });

});
