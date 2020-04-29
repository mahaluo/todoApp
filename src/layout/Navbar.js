import React, { Component } from 'react'
import SignedOutLinks from './SignedOutLinks'
import SignedInLinks from './SignedInLinks'
import '../index.css'


class Navbar extends Component {


    render() {
        
        console.log('Navbar checking auth..');
        console.log(this.props.auth);
 
        return (
            <div>
                <nav className="nav-wrapper navbar" id="navbar">

                    <div className="container">
                        <a href="/" className="brand-logo">Todo App</a>
                        <a href="/" data-target="mobile-links" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                        <ul className="right hide-on-med-and-down">

                        <SignedInLinks />
                           
                        </ul>
                    </div>
                </nav>

                <div className="container">
                    <ul className="sidenav indigo center white side-nav" id="mobile-links">
                    <SignedInLinks />
                    </ul>
                </div>
            </div>
        )
    }
}

export default Navbar