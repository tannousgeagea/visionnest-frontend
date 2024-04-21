
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const NavBar = () => {
    return (
        <nav className='navbar-container'>
            <ul>
                <li>Home</li>
                <li>Features</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
}

export default NavBar