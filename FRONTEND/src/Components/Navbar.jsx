import React from 'react';
import logo from "../assets/Images/logo.png";
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav>
            <img src={logo} className="logo" alt="Logo" title="FoodYard" />
            <ul className="navbar">
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/aboutUs">What We Do</Link>
                    <Link to="/joinUs">Get Involved</Link>
                    <Link to="/aboutUs">About Us</Link>
                    <Link to="/contactUs">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
