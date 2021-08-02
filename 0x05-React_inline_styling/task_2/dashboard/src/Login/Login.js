import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {

  const styles = StyleSheet.create({
    Login: {
      paddingLeft: '2.5%',
      paddingTop: '2.5%',
    },
    input: {
      margin: 5,
    }
  });

  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email" className={css(styles.input)}></input>
      <label htmlFor="password">Password:</label>
      <input id="password" type="password" className={css(styles.input)}></input>
      <button>OK</button>
    </div>
  );
}
