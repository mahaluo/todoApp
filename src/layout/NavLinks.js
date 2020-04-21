import React, { Component } from 'react'
import '../index.css'

class NavLinks extends Component {

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
        document.getElementById('nav-bar').style.backgroundColor = randomColor;
        
    }

    render() {
        return (
            <div>
                <li><a href="/#" className="btn-small" id="color-button" onClick={this.changeThemeColor}><i className="material-icons">color_lens</i></a></li>
            </div>
        )
    }
}


export default NavLinks;