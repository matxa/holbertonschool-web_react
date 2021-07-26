import React from 'react';
import logo from '../assets/holberton-logo.jpeg';
import { shallow, mount } from 'enzyme';
import Header from './Header';

describe('Test Header component', () => {

  it('Header renders without crashing', () => {
    shallow(<Header />);
  });

  it('Tests if the Header component has 1 img && 1 h1', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.containsAllMatchingElements([
      <img></img>,
      <h1>School dashboard</h1>
    ])).toEqual(true);
  });
});
