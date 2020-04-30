import React from 'react';


const Todo = ({ todos, removeTodo }) => {
    let todoList = [];

    if (todos) {
        todoList = todos.length ? (
            todos.map(todo => {
                return (
                    <div className="row" key={todo.id}>
                        <label className="left todo-item collection-item">
                            <input type="checkbox" />
                            <span>{todo.content}</span>
                        </label>
                        <div className="waves-effect waves-light btn-small right green-lighten-1" value={todo.id} onClick={ () => { removeTodo(todo.id) }}><i className="material-icons right">remove_circle_outline</i>remove</div>
                    </div>
                )
            })
        ) : (
                <p>nothing left todo!</p>
            )
    }
  
    return (
        <div className="container" id="todo-list">
            <div className="col s12 m4 l2"></div>

            <div className="col s12 m4 l8">
                <div className="container center-align">
                    <h5 className="brand-logo"> your todo list ({todoList.length})</h5> 
                </div>

                <div className="container">
                    <div className="collection">
                        {todoList}
                    </div>
                </div>
            </div>

            <div className="col s12 m4 l2"></div>
        </div>
    )
}


export default Todo;