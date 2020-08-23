import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './components/app/app';
import * as serviceWorker from './serviceWorker';

const renderReactDom = () => {
    ReactDOM.render(<App />, document.getElementById('root'));
  };

if (window.cordova) {
    document.addEventListener('deviceready', () => {
      renderReactDom();
    }, false);
  } else {
    renderReactDom();
  }

serviceWorker.unregister();
