import React from "react";
import WithLogging from "./WithLogging";
import Login from '../Login/Login';
import { mount } from 'enzyme';

describe('HOC - WithLogging', () => {
  it('should console.log Component <NAME_OF_COMPONENT> is mounted and going to unmount', () => {
    const spy = jest.spyOn(console, 'log');
		const Component = WithLogging(() => <p />);
		const wrapper = mount(<Component />);
		expect(spy).toHaveBeenCalledWith('Component Component is mounted');
		wrapper.unmount();
		expect(spy).toHaveBeenCalledWith('Component Component is going to unmount');
		spy.mockRestore();
  });

  it('should console.log Component Login is mounted and going to unmount', () => {
    const spy = jest.spyOn(console, 'log');
		const Component = WithLogging(Login);
		const wrapper = mount(<Component />);
		expect(spy).toHaveBeenCalledWith('Component Login is mounted');
		wrapper.unmount();
		expect(spy).toHaveBeenCalledWith('Component Login is going to unmount');
		spy.mockRestore();
  });
  
});
