import React, { Component } from 'react';
import Navbar from './layout/Navbar';
import M from 'materialize-css';
import './index.css';
import Todo from './Todos/Todo';
import SignInForm from './layout/SignInForm';
import AddTodo from './Todos/AddTodo';
import SignUpForm from './layout/SignUpForm';

class App extends Component {

  state = {
    user: null,
    newUser: null,
    todos: [],
    auth: false
  }

  componentDidMount() {
    //mobile links
    let sidenav = document.querySelector('#mobile-links');
    M.Sidenav.init(sidenav, {});
    //hamburgermenu dropdown settings
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, { inDuration: 300, outDuration: 200 });

    let modalElem = document.querySelectorAll('.modal');
    M.Modal.init(modalElem, { inDuration: 300, outDuration: 200 });

    this.updateTodoList();
  }

  componentWillMount() {
    //click listener for clicking outside, not using atm
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    //click listener for clicking outside, not using atm
    document.removeEventListener('mousedown', this.handleClick, false);
  }

  //handle click outside functions, not used currently. for future ideas
  handleClick = (e) => {
    //check if its outside or not
    //outside means no element was hit by the click
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClickOutside();
  }

  handleClickOutside = () => {
    console.log('outside click')
  }

  logIn(email, password) {

    var user = JSON.parse(localStorage.getItem('currentUser'));

    if (user[0].email === email && user[0].password === password) {
      this.setState({
        user: {
          email,
          password
        },
        auth: true
      })
      console.log('user logged in successfully');
    }
    else {
      console.log('user tried bad login');
      this.setState({
        auth: false
      })
    }
   
  }

  signUp(newEmail, newPassword) {

    this.setState({
      newUser: {
        newEmail: newEmail,
        newPassword: newPassword
      },
      auth: true
    })

    let newUser = [
      {
        email: newEmail,
        password: newPassword
      }
    ]

    localStorage.setItem('currentUser', JSON.stringify(newUser));
  }

  logOut() {
    this.setState({
      user: null
    })
  }

  //add todo to localstorate
  addTodo = (todo) => {
    //give random id
    todo.id = Math.random();
    let todos = [];

    if (this.state.todos) {
      todos = [...this.state.todos, todo];
    }
    else {
      todos = [
        {
          content: todo.content,
          id: todo.id,
        }
      ]
    }

    this.setState({
      todos
    })
    localStorage.setItem('todoList', JSON.stringify(todos));
  }

  removeTodo = (id) => {
    //record in console log
    console.log('removing');
    console.log(id);

    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });

    //update state list
    this.setState({
      todos
    })

    //update localstorage list
    localStorage.setItem('todoList', JSON.stringify(todos));
  }

  updateTodoList() {

    console.log('App found these props');
    console.log(this.props.todoList);
    let propsList = this.props.todoList;
    this.setState({
      todos: propsList
    })
  }

  render() {

    return (
      <div className="App">
        <div className="outer-node" ref={node => this.node = node}>

          <Navbar auth={this.state.auth} />

          {
            (this.state.user) ?
              <div className="container col s12 offset-s3">
                <Todo todos={this.state.todos} removeTodo={this.removeTodo} />
                <AddTodo addTodo={this.addTodo} />
              </div>
              :
              <div className="container">
                <SignInForm onSignIn={this.logIn.bind(this)} />
                <SignUpForm onSignUp={this.signUp.bind(this)} />
              </div>
          }

        </div>
      </div>
    )
  }
}




export default App;
