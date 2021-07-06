import './App.css';
import logo from './holberton_logo.jpeg';
import { getFullYear, getFooterCopy } from './utils.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <header className="holberton">
          <img src={logo} alt="Holberton Logo"></img>
          <h1>School dashboard</h1>
        </header>
        <body className="App-body">
          <p>Login to access the full dashboard</p>
        </body>
        <footer className="App-footer">
          <p>Copyright {getFullYear()} - {getFullYear(true)}</p>
        </footer>
      </header>
    </div>
  );
}

export default App;
