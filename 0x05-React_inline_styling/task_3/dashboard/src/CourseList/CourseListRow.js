import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  th: {
    backgroundColor: '#deb5b545',
  },
  td: {
    backgroundColor: '#f5f5f5ab'
  }
});

function CourseListRow(props) {
  if (props.isHeader) {
    if (props.textSecondCell === null || props.textSecondCell === undefined) {
      return (
        <tr className={ props.isHeader ? css(styles.th) : css(styles.td) }>
          <th colSpan="2">{props.textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr className={ props.isHeader ? css(styles.th) : css(styles.td) }>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr className={ props.isHeader ? css(styles.th) : css(styles.td) }>
        <td>{props.textFirstCell}</td>
        <td>{props.textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

export default CourseListRow;
