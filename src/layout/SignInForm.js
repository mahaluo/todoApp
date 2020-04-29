import React, { Component } from 'react';

class SignInForm extends Component {

    state = {
        email: '',
        password: '',
        auth: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;
        console.log('signing in user..');

        if (this.state.email === "test@test.com" && this.state.password === "test") {
            this.state.auth = true;
            
            console.log(this.state.auth);
            this.props.onSignIn(email, password);
        }
        else {
            this.state.auth = false;
            console.log(this.state.auth);
            console.log('user tried bad login');
        }
    }


    render() {
        return (
            <div className="container">
                <div className="section"></div>

                <h5 className="indigo-text center">Please, login into your account</h5>

                <div className="section"></div>

                <div className="container">

                    <form onSubmit={this.handleLogin.bind(this)} className="transparent">

                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>


                        <div className="input-field">
                            <button className="btn indigo accent-3 z-depth-0">Login</button>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}


export default SignInForm;