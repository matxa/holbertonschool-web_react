import './App.css';
import logo from './holberton_logo.jpeg'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton Logo"></img>
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email"></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password"></input>
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
