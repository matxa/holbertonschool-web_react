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
    const header = (
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email"></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password"></input>
        <button>OK</button>
      </div>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

});
