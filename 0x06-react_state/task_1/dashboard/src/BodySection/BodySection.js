import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySection: {
    margin: 40,
  }
});

export default function BodySection(props) {
  return (
    <div className={css(styles.bodySection)}>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}
