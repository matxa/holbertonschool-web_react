import React from 'react';
import './Header.css'
import logo from '../assets/holberton-logo.jpeg';

export default function Header() {
  return (
    <div className="App-header">
      <img src={logo} alt="Holberton Logo"></img>
      <h1>School dashboard</h1>
    </div>
  );
}
