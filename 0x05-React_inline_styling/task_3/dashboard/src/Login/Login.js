import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {

  const styles = StyleSheet.create({
    Login: {
      paddingLeft: '2.5%',
      paddingTop: '2.5%',
    },
    inputs: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      '@media (max-width: 900px)': {
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    input: {
      '@media (max-width: 900px)': {
        border: 'none',
      },
      margin: 5,
    },
    btn: {
      width: 50,
      height: 25,
      '@media (max-width: 900px)': {
        border: '3px solid orange',
        borderRadius: 2,
      },
    }
  });

  return (
    <div className={css(styles.Login)}>
      <p>Login to access the full dashboard</p>
      <div className={css(styles.inputs)}>
        <div>
          <label htmlFor="email">Email: </label>
          <input id="email" type="email" className={css(styles.input)}></input>
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input id="password" type="password" className={css(styles.input)}></input>
        </div>
        <button className={css(styles.btn)}>OK</button>
      </div>
    </div>
  );
}

export default Login;
