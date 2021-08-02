import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';
import './CourseList.css';

function CourseList(props) {

  const styles = StyleSheet.create({
    table: {
      width: '80%',
      textAlign: 'center',
      border: '1px solid #dedede',
      thead: {
        th: {
          borderBottom: '1px solid #dedede'
        }
      }
    }
  });

  return (
    <table id="CourseList" className={css(styles.table)}>
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
