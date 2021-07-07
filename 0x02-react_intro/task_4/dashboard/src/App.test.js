import App from './App';
import './App.css'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import logo from './holberton_logo.jpeg'
import { getFullYear, getFooterCopy } from './utils.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Test various components of the App', () => {

  it('App renders without crashing', () => {
    shallow(<App />);
  });

  it('verify that App renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    const header = (
      <div className="App-header">
        <img src={logo} alt="Holberton Logo"></img>
        <h1>School dashboard</h1>
      </div>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('verify that App renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    const header = (
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        <input id="email" type="email"></input>
        <label htmlFor="password">Password:</label>
        <input id="password" type="password"></input>
        <button>OK</button>
      </div>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('verify that App renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    const header = (
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

});

