import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import Notifications from './Notifications/Notifications';

ReactDOM.render(
  <React.StrictMode>
    <Notifications className="root-notifications" />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
