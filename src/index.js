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
  console.log('ready happened');
  renderReactDom();
}

function onPause() {
  console.log('paused');
}

function confirmCallback() {
  console.log('confirmed return');
}

//this notification is not working propery, title is still localhost and button name is still ok...
function onResume() {
  navigator.notification.alert(
    'Welcome back!',      // message
    confirmCallback,      // callback
    ['Game Over'],        // title
    ['Done']              // buttonName
  );
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
