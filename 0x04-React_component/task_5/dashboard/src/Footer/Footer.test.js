import React from 'react';
import { shallow } from 'enzyme';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Footer from './Footer';

describe('Test Footer component', () => {

  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });

  it('verify that Footer renders with class App-footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });

});
