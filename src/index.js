import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const renderReactDom = (todoList) => {


  ReactDOM.render(<App todoList={todoList} />, document.getElementById('root'));
};


if (window.cordova) {

  window.addEventListener('orientationchange', function () {
    window.location.reload();
  }, false);

  document.addEventListener('deviceready', onDeviceReady.bind(this), false);

} else {

  renderReactDom(getTodos());
  console.log('else happened');
}



function onDeviceReady() {

  //when user returns to application
  document.addEventListener('resume', onResume.bind(this), false);
  document.addEventListener('pause', onPause.bind(this), false);
  console.log('ready happened');

  renderReactDom(getTodos());
}

function confirmCallback() {
  console.log('confirmed return');
}

function getTodos() {
  if (window.localStorage.getItem('todoList')) {
    let todoList = JSON.parse(window.localStorage.getItem('todoList'));
    console.log('fetching todos...');
    console.log(todoList);
    return (todoList);
  }
  else {
    return null;
  }
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

function onPause() {

}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
