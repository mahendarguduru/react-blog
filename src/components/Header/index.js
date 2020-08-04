import React from 'react';
import './style.css';

const Header=props=>{
    return(
        <header className="header">
        <nav className="headerMenu">
                <a href="http://localhost:3000/">Home</a>
                <a href="http://localhost:3000/about-us">About Us</a>
                <a href="http://localhost:3000/contact-us">Contact Us</a>
            </nav>
            <div >
            <div className="socialMedia" >
                    <a href="https://www.facebook.com/mahendar.guduru/"><img src={require('../../Assets/icons/fb.jpg')} alt="fb"/></a>
                    <a href="https://www.instagram.com/mahendar_guduru/"><img src={require('../../Assets/icons/insta.jpg')} alt="insta"/></a>
                    <a href="https://www.linkedin.com/in/mahendar-guduru-061168143/"><img src={require('../../Assets/icons/linkedin.jpg')} alt="linkedin"/></a>
                    <img src={require('../../Assets/icons/twitter.jpg')} alt="twitter"/>
                </div>                
            </div>
        </header>
    )
}

export default Header;