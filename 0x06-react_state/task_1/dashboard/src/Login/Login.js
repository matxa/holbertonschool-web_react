import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoggedIn: false, email: '', password: '', enableSubmit: false };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit() {
    this.setState({ isLoggedIn: true });
    console.log("clicked")
  }

  handleChangeEmail(event) {
    this.setState({
      email: event.target.value,
      enableSubmit: event.target.value.length < 1 ? false : true,
    });
  }

  handleChangePassword(event) {
    this.setState({
      password: event.target.value,
      enableSubmit: event.target.value.length < 1 ? false : true,
    });
  }

  styles = StyleSheet.create({
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

  onClickPreventDefault(e) {
    e.preventDefault();
  }

  render() {
    const { enableSubmit } = this.state;
    return (
      <div className={css(this.styles.Login)}>
        <p>Login to access the full dashboard</p>
        <form
          className={css(this.styles.inputs)}
          onSubmit={ this.onClickPreventDefault }
        >
          <div>
            <label htmlFor="email">Email: </label>
            <input
              id="email"
              type="email"
              className={css(this.styles.input)}
              onChange={ this.handleChangeEmail }
            ></input>
          </div>
          <div>
            <label htmlFor="password">Password: </label>
            <input
              id="password"
              type="password"
              className={css(this.styles.input)}
              onChange={ this.handleChangePassword }
            ></input>
          </div>
          <input
            type="submit"
            value="Login"
            onClick={ this.handleLoginSubmit }
            className={css(this.styles.btn)}
            disabled={ !enableSubmit }
          ></input>
        </form>
      </div>
    );
  }
}

export default Login;
