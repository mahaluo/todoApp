import React, { Component } from 'react'
import SignedInLinks from './SignedInLinks'
import SideNavLinks from './SideNavLinks'
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
                        {
                            (this.props.auth) ? <div> <SignedInLinks /> </div> : <div> </div>
                        }
                    </div>
                </nav>

                <ul className="sidenav indigo center white side-nav" id="mobile-links">
                    {
                        (this.props.auth) ? <div> <SideNavLinks /> </div> : <div> </div>
                    }
                </ul>
            </div>
        )
    }
}

export default Navbar