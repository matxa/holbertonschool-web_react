import React from 'react';
import PropTypes from 'prop-types';

const rowThInlineCss = {
  backgroundColor: '#deb5b545',
}

function CourseListRow(props) {
  if (props.isHeader) {
    if (props.textSecondCell === null || props.textSecondCell === undefined) {
      return (
        <tr style={ rowThInlineCss }>
          <th colSpan="2">{props.textFirstCell}</th>
        </tr>
      );
    } else {
      return (
        <tr style={ rowThInlineCss }>
          <th>{props.textFirstCell}</th>
          <th>{props.textSecondCell}</th>
        </tr>
      );
    }
  } else {
    return (
      <tr style={{ backgroundColor: '#f5f5f5ab' }}>
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
