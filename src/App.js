import React, { Component } from 'react';
import AddTodo from './Todos/AddTodo';
import Navbar from './layout/Navbar';
import M from 'materialize-css';
import './index.css';


class App extends Component {

  componentDidMount() {
    //mobile links
    let sidenav = document.querySelector('#mobile-links');
    M.Sidenav.init(sidenav, {});
    //hamburgermenu dropdown settings
    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 200});
  }

  componentWillMount() {
    //click listener for clicking outside, not using atm
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    //click listener for clicking outside, not using atm
    document.removeEventListener('mousedown', this.handleClick, false);
  }

//add todo to localstorate
  addTodo = (todo) => {
    //give random id
    todo.id = Math.random();
    //add to localStorage
    localStorage.setItem(todo.id, JSON.stringify(todo.content));
    //reload page to show item
    window.location.reload();
  }

//remove todo from localstorage
  removeTodo=(index)=>{
    //record in console log for now
    console.log('removing');
    console.log(index);
    //remove from localStorage
    localStorage.removeItem(localStorage.key(index));
    //reload page to show item
    window.location.reload();
  }

//handle click outside functions, not used currently. for future ideas
  handleClick =(e) => {
    //check if its outside or not
    //outside means no element was hit by the click
      if (this.node.contains(e.target)) {
        return;
      }
      this.handleClickOutside();
  }

  handleClickOutside=()=> {
    console.log('outside click')
  }



  render() {

    let localTodos = [];

    //get localStorage
    for(var i =0; i < localStorage.length; i++){
      console.log(localStorage.getItem(localStorage.key(i)));
      localTodos.push(localStorage.getItem(localStorage.key(i)));
    }

    //get todo count, badge is based on number of todos
    const getTodos = () => {
      if(localStorage.length === 0) {
        return (
          <span className="new badge red" data-badge-caption="todos">{localStorage.length.toString()}</span>
        )
      }
      else if (localStorage.length === 1) {
        return (
          <span className="new badge" data-badge-caption="todo">{localStorage.length.toString()}</span>
        )
      }
      else {
        return (       
          <span className="new badge" data-badge-caption="todos">{localStorage.length.toString()}</span>
        )
      }
    }

    return (
      <div className="App">
        <div className="outer-node" ref={node => this.node = node}>
          <Navbar />    

              <div className="col s12 m4 l2"></div>
              <div className="col s12 m4 l8">
                <div className="container center-align">
                  <h5 className="brand-logo"> your todo list {getTodos()} </h5>
                </div>
               
                  <div className="container">
                    <div className="collection">
                      {localTodos.map((value, index) => {
                        return (
                          <div className="row" key={index}>
                            <label className="left todo-item collection-item">
                            <input type="checkbox"/>
                            <span>{value}</span>
                            </label>
                          <div className="waves-effect waves-light btn-small right green-lighten-1" value={index} onClick={() => this.removeTodo(index)}><i className="material-icons right">remove_circle_outline</i>remove</div>
                          </div>
                        )
                      })}
                  </div>
                </div>

                <AddTodo addTodo={this.addTodo} />

              </div>
              <div className="col s12 m4 l2"></div>
    



        </div>
      </div>
    )
  }
}




export default App;
