import React from 'react';
import './Login.css'

export default function Login() {
  return (
    <div className="App-body">
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <input id="email" type="email"></input>
      <label htmlFor="password">Password:</label>
      <input id="password" type="password"></input>
      <button>OK</button>
    </div>
  );
}
