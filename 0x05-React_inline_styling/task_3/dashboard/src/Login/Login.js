import React from 'react';
import { StyleSheet, css, reset } from 'aphrodite';

reset();

export default function Login() {

  const styles = StyleSheet.create({
    Login: {
      paddingLeft: '2.5%',
      paddingTop: '2.5%',
      '@media (max-width: 900px)': {
        backgroundColor: 'blue',
      }
    },
    input: {
      margin: 5,
    },
  });

  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <div>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email" className={css(styles.input)}></input>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password" className={css(styles.input)}></input>
      </div>
      <button>OK</button>
    </div>
  );
}
