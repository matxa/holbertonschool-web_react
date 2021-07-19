import React from 'react';
import './Login.css'
import Login from "./Login";
import { shallow } from 'enzyme';

describe('Test Login component', () => {

  it('App renders without crashing', () => {
    shallow(<Login />);
  });

  it('verify that Login renders a div with class App-body', () => {
    const wrapper = shallow(<Login />);

    expect(wrapper.containsAllMatchingElements([
      <label htmlFor="email">Email:</label>,
      <input type="email"></input>,
      <label htmlFor="password">Password:</label>,
      <input type="password"></input>
    ])).toEqual(true);
  });
});
