import React from 'react';
import logo from '../assets/holberton-logo.jpeg';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Test Header component', () => {

  it('Header renders without crashing', () => {
    shallow(<Header />);
  });

  it('verify that Footer renders a div with class App-header', () => {
    const wrapper = shallow(<Header />);
    const header = (
      <div className="App-header">
        <img src={logo} alt="Holberton Logo"></img>
        <h1>School dashboard</h1>
      </div>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });
});
