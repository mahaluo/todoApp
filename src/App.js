import React, { Component } from 'react';
import AddTodo from './Todos/AddTodo';
import Navbar from './layout/Navbar';
import M from 'materialize-css';
import './index.css';


class App extends Component {

  componentDidMount() {
    let sidenav = document.querySelector('#mobile-links');
    M.Sidenav.init(sidenav, {});

    let elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {inDuration: 300, outDuration: 200});  
  }

  componentWillMount() {
    document.addEventListener('mousedown', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false);
  }

//add todo to localstorate
  addTodo = (todo) => {

    todo.id = Math.random();
    localStorage.setItem(todo.id, JSON.stringify(todo.content));
    window.location.reload();
  }

//remove todo from localstorage
  removeTodo=(index)=>{
    console.log('removing')
    console.log(index);
    localStorage.removeItem(localStorage.key(index));
    window.location.reload();
  }

//handle click outside functions, not used currently. for future ideas
  handleClick =(e) => {
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
    for(var i =0; i < localStorage.length; i++){
      console.log(localStorage.getItem(localStorage.key(i)));
      localTodos.push(localStorage.getItem(localStorage.key(i)));
    }

    return (
      <div className="App">
        <div className="outer-node" ref={node => this.node = node}>
          <Navbar />    
      
            <div className="row">
              <div className="col s12 m4 l2"></div>
              <div className="col s12 m4 l8">
                <h5 className="brand-logo center m4"> your todo list ({localStorage.length.toString()}) </h5>

                <div className="container">
                  <div className="collection">
                  {localTodos.map((value, index) => {
                    return (
                      <div className="row" key={index}>
                        <label className="left todo-item collection-item">
                        <input type="checkbox"/>
                        <span className="badge">{value}</span>
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
      </div>
    )
  }
}




export default App;
