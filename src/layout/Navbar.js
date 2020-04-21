import React, {Component} from 'react'
import NavLinks from './NavLinks'

class Navbar extends Component {

    render() {
          return (
            <div>
                <nav className="nav-wrapper nav-bar" id="nav-bar">

                   <div className="container">
                        <a href ="/" className="brand-logo">Todo App</a>
                        <a href="/" data-target="mobile-links" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                        <ul className="right hide-on-med-and-down signin-links">
                            <NavLinks />
                        </ul>
                   </div>
                </nav>

                    <div className="container">
                        <ul className="sidenav indigo center white" id="mobile-links">
                            <NavLinks />
                        </ul>
                    </div>
            </div>   
        )   
    }  
}

export default Navbar