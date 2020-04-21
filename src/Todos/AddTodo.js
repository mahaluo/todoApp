import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {  
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>

                    <label><p className="center">Add new todo:</p></label>
                    <div className="input-field offset-l5 l2 offset-m4 m4 offset-s3 s6">
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    </div>

                </form>
            </div>
        )
    }
}


export default AddTodo