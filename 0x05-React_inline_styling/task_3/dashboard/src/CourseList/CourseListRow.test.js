import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';
import { StyleSheetTestUtils } from 'aphrodite';



describe('Test CourseListRow component', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });

  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });


  it('Component renders without crashing', () => {
    shallow(<CourseListRow isHeader={true} textFirstCell="first-cell"/>);
  });
  
  it('When isHeader is True', () => {
    const tr = shallow(<CourseListRow isHeader={true} textFirstCell="first-cell" />);
    expect(tr.props()["children"]).toEqual(<th colSpan="2">first-cell</th>);
  });

  it('When isHeader is True', () => {
    const tr = shallow(<CourseListRow isHeader={true} textFirstCell="first-cell" textSecondCell="second-cell" />);
    expect(tr.props()["children"]).toEqual([<th>first-cell</th>, <th>second-cell</th>]);
  });
  
  it('When isHeader is False || undefined || null', () => {
    const tr = shallow(<CourseListRow textFirstCell="first-cell" textSecondCell="second-cell" />);
    expect(tr.props()["children"]).toEqual([<td>first-cell</td>, <td>second-cell</td>]);
  });

});
