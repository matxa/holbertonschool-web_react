import Notifications from './Notifications';
import './Notifications.css'
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import logo from './holberton_logo.jpeg'
import { getLatestNotification } from './utils.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Test various components of the Notifications', () => {

  it('Notifications renders without crashing', () => {
    shallow(< Notifications />);
  });

  it('Notifications renders three list items', () => {
    const wrapper = shallow(<Notifications />);
    const header = (
      <ul>
        <li data="default">New course available</li>
        <li data="urgent">New resume available</li>
        <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
      </ul>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

  it('Notifications renders the text Here is the list of notifications', () => {
    const wrapper = shallow(<Notifications />);
    const header = (
      <p>Here is the list of notifications</p>
    );
    expect(wrapper.contains(header)).toEqual(true);
  });

});
