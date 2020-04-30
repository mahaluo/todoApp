import React, { Component } from 'react'


class SignUpForm extends Component {


    state = {
        newEmail: '',
        newPassword: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegister() {

        let newEmail = this.state.newEmail;
        let newPassword = this.state.newPassword;
        console.log('registering new user..');
        this.props.onSignUp(newEmail, newPassword);
        window.location.reload();
    }


    render() {

        return (
            <div className="container">
                <button data-target="modal1" className="btn green lighten-1 right modal-trigger">Register</button>

                <div id="modal1" className="modal">
                    <div class="modal-content">
                        <h4>Sign Up</h4>
                        <div className="input-field col s6">
                            <label htmlFor="newEmail">Email</label>
                            <input type="email" id="newEmail" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col s6">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="newPassword" onChange={this.handleChange} />
                        </div>

                        <div className="input-field col s6">
                            <button type="submit" className="btn green lighten-1" onClick={this.handleRegister.bind(this)}>Register</button>
                        </div>

                    </div>

                    <div className="modal-footer">
                        <a className="modal-action modal-close btn-flat">Close</a>
                    </div>
                </div>
            </div>
        )
    }
}





export default SignUpForm