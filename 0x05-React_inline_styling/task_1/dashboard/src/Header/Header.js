import React from 'react';
import logo from '../assets/holberton-logo.jpeg';
import { StyleSheet, css } from 'aphrodite';

export default function Header() {

  const styles = StyleSheet.create({
    header: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      borderBottom: '3px solid #e0344c',
    },
    h1: {
      color: '#e0344c',
    },
    img: {
      width: '250px',
      height: '250px',
      display: 'inline',
    }
  });

  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="Holberton Logo" className={css(styles.img)}></img>
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}
