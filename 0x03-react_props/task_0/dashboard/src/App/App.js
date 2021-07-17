import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Header />
        <Login />
        <Footer />
      </div>
    </React.Fragment>
  );
}
