import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './Store/store'
import Darkmode from 'darkmode-js';
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));

const options = {
  bottom: '64px',
  right: 'unset',
  left: '32px',
  time: '0.5s',
  mixColor: '#fff',
  backgroundColor: '#f0f0f0',
  buttonColorDark: '#100f2c',
  buttonColorLight: '#f0f0f0',
  saveInCookies: true,
  label: '🌓',
  autoMatchOsTheme: true,
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
