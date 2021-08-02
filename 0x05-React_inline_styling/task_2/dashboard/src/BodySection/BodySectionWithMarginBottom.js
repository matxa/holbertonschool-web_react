import React from "react";
import PropTypes from 'prop-types';
import BodySection from "./BodySection";
import { StyleSheet, css } from 'aphrodite';

function BodySectionWithMarginBottom(props) {

  const styles = StyleSheet.create({
    bodySectionWithMargin: {
      marginBottom: '40px',
    }
  });

  return(
    <div className={css(styles.bodySectionWithMargin)}>
      <BodySection { ...props } />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any
}

export default BodySectionWithMarginBottom;
