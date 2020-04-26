import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderReactDom = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

if (window.cordova) {

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);

} else {

  renderReactDom();
  console.log('else happened');
}

function onDeviceReady() {
 
  //when user moves to another application
  document.addEventListener('pause', onPause.bind(this), false);

  //when user returns to application
  document.addEventListener('resume', onResume.bind(this), false);
  alert('ready');
  console.log('ready happened');
  renderReactDom();
}

function onPause() {
  alert('paused');
  console.log('paused');
}

function confirmCallback() {
  console.log('confirmed');
}

function onResume() {
  navigator.notification.confirm('welcome back', confirmCallback, ['resumed'], ['ok'])
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
