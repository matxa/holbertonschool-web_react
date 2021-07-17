import App from './App';
import './App.css';
import { shallow } from 'enzyme';
import React from 'react';

describe('Test various components of the App', () => {

  it('App renders without crashing', () => {
    shallow(<App />);
  });

});
