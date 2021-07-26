import React, { Component } from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

export const listCourses = [
  {
    id: 1,
    name: 'ES6',
    credit: 60
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20
  },
  {
    id: 3,
    name: 'React',
    credit: 40
  }
]

export const listNotifications = [
  {
    id: 1,
    type: "default",
    value: "New course available"
  },
  {
    id: 2,
    type: "urgent",
    value: "New resume available"
  },
  {
    id: 3,
    type: "urgent",
    html: { __html: getLatestNotification() }
  }
]

class App extends Component {

  constructor(props) { super(props) }

  static propTypes = {
    isLoggedIn: PropTypes.bool,
    logOut: PropTypes.func
  }
  
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => {}
  }
  
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.key == 'h' && event.ctrlKey) {
      alert("Logging you out");
      this.props.logOut()
    }
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <Notifications listNotifications={listNotifications} />
          <Header />
          <div className="container">
            { this.props.isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login /> }
          </div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default App
