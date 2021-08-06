import React from 'react';
import CourseListRow from './CourseListRow';
import CourseList from './CourseList';
import { shallow } from 'enzyme';
import { listCourses } from '../App/App';
import { StyleSheetTestUtils } from 'aphrodite';



describe('Test CourseList component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('CourseList renders without crashing', () => {
    shallow(<CourseList />);
  });
  
  it('Test all tr render successfully', () => {
    const table = shallow(<CourseList listCourses={listCourses} />);
    expect(table.containsAllMatchingElements([
      <CourseListRow
      isHeader={false}
      key="1"
      textFirstCell="ES6"
      textSecondCell={60}
      />,
      <CourseListRow
        isHeader={false}
        key="2"
        textFirstCell="Webpack"
        textSecondCell={20}
      />,
      <CourseListRow
        isHeader={false}
        key="3"
        textFirstCell="React"
        textSecondCell={40}
      />
    ])).toEqual(true);
  });

  it('enders correctly if passed an empty array', () => {
    const table = shallow(<CourseList listCourses={[]} />);

    expect(table.containsMatchingElement(
      <CourseListRow textFirstCell="No course available yet"/>
    )).toEqual(true);
  });

  it('enders correctly if not pass the listCourses property', () => {
    const table = shallow(<CourseList />);

    expect(table.containsMatchingElement(
      <CourseListRow textFirstCell="No course available yet"/>
    )).toEqual(true);
  });
  
});
