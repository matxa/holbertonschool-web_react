import React from 'react';
import CourseListRow from './CourseListRow';
import './CourseList.css';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';

function CourseList(props) {
  return (
    <table id="CourseList">
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      <tbody>
        {
          props.listCourses.length > 0
          ?
          props.listCourses.map((course) => {
            return <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} />  
          })
          :
          <CourseListRow textFirstCell="No course available yet"/>
        }
      </tbody>
    </table>
  );
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: []
}

export default CourseList;
