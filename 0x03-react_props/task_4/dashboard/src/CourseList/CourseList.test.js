import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';
import './CourseList.css';
import { shallow } from 'enzyme';

describe('Test CourseList component', () => {
  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });
  
  it('Test all tr render successfully', () => {
    const table = shallow(<CourseList />);

    expect(table.containsAllMatchingElements([
      <CourseListRow textFirstCell="Available courses" isHeader={true} />,
      <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />,
      <CourseListRow textFirstCell="ES6" textSecondCell="60" />,
      <CourseListRow textFirstCell="Webpack" textSecondCell="20" />,
      <CourseListRow textFirstCell="React" textSecondCell="40" />
    ])).toEqual(true);
  });
  
});

