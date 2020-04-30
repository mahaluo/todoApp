import React, { Component } from 'react'
import '../index.css'


class SideNavLinks extends Component {

    changeColor = () => {
        console.log('click')
        document.getElementById('color-button').style.backgroundColor = "blue";
    }

    getRandomRGBValue = () => {
        return Math.min(Math.floor(Math.random() * 255 + 1), 255);
    }

    getRandomColor = () => {
        var r = this.getRandomRGBValue(),
            g = this.getRandomRGBValue(),
            b = this.getRandomRGBValue();
        return "#" + (((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1));
    }

    changeThemeColor = () => {
        var randomColor = this.getRandomColor();
        document.getElementById('color-button').style.backgroundColor = randomColor;
        document.getElementById('logout-button').style.backgroundColor = randomColor;
        document.getElementById('navbar').style.backgroundColor = randomColor;
    }

    handleSignOut = () => {
        console.log('user signed out');
        window.location.reload();
    }

    render() {
        return (
            <div className="container side-nav-container">
             
                    <li>
                    <a id="color-button" onClick={this.changeThemeColor}><i className="material-icons left">color_lens</i>colors</a>
                    </li>
             
                
                    <li>
                    <a id="logout-button" onClick={this.handleSignOut}><i className="material-icons left">exit_to_app</i>logout</a>
                    </li>
             
            </div>
        )
    }
}


export default SideNavLinks;