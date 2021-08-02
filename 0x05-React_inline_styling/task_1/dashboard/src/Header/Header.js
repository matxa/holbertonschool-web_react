import React from 'react';
import logo from '../assets/holberton-logo.jpeg';
import { StyleSheet, css } from 'aphrodite';
import mainStyles from '../styles';

export default function Header() {

  const styles = StyleSheet.create({
    AppHeader: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottom: `3px solid ${ mainStyles.root.holbertonColor }`,
      h1: {
        color: mainStyles.root.holbertonColor,
      },
      img: {
        width: '250px',
        height: '250px',
        display: 'inline',
      }
    },
  });

  return (
    <div className={css(styles.AppHeader)}>
      <img src={logo} alt="Holberton Logo"></img>
      <h1>School dashboard</h1>
    </div>
  );
}
