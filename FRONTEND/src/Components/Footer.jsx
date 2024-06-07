import React from 'react';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <section className="footer">
            <div className="foot">
                <div className="footer-content">
                    <div className="footlinks">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><Link to="/joinUs">Donate</Link></li>
                            <li><Link to="/aboutUs">About Us</Link></li>
                            <li><Link to="/contactUs">Contact Us</Link></li>
                        </ul>
                    </div>
                    <div className="footlinks">
                        <h4>Connect</h4>
                        <div className="social">
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-facebook'></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-instagram'></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-twitter'></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-linkedin'></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-youtube'></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-wordpress'></i></a>
                            <a href="#" target="_blank" rel="noopener noreferrer"><i className='bx bxl-github'></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="end">
                <p>Tel: 1800-00-000 Email: support@foodyard.com | Copyright © 2023 FoodYard | All Rights Reserved. <br />Made with ❤️ By : Sushant | Aniket | Shubham | Shambhavi</p>
            </div>
        </section>
    );
};

export default Footer;
