import React from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import Footer from './Footer';
import { shallow } from 'enzyme';

describe('Test Footer component', () => {

  it('Footer renders without crashing', () => {
    shallow(<Footer />);
  });

  it('verify that Footer renders with class App-footer', () => {
    const wrapper = shallow(<Footer />);
    const header = (
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

});
