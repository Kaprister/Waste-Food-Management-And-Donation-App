import React from 'react';
import { Link } from 'react-router-dom';



const AboutUs = () => {
    return (
        <div className="aboutbody">
            <section className="about">
                <div className="main">
                    <div className="abt-text">
                        <h1>About <span>Us</span></h1>
                        <p>FoodYard is a food waste management system designed to reduce the food wastage and use it in a useful way. This system also provides a platform for people where they can donate food. We are in contact with 150+ banquets. We collect the donated food and distribute it among the people who really need it. It not only reduces food waste but also hunger, which is a major problem of the world. We believe nutritious food should go to people, not landfills. This website is developed by: <br /> -- Sushant Kumar kapri <br /> -- Aniket Raj <br /> -- Shubham Choudhary <br/> -- Shambhavi Shree</p>
                        <p> -- Under The Guidiance of Ayan Mukherji(Assistant Professor HIT, Haldia).</p>
                        <Link to="/contactUs" className="connectbtn">Connect with us!</Link>
                        <div className="connect-section">
                            <div className="social-icons">
                                <Link to="#" target="_blank"><i className='bx bxl-facebook'></i></Link>
                                <Link to="#" target="_blank"><i className='bx bxl-instagram'></i></Link>
                                <Link to="#" target="_blank"><i className='bx bxl-twitter'></i></Link>
                                <Link to="#" target="_blank"><i className='bx bxl-linkedin'></i></Link>
                                <Link to="#" target="_blank"><i className='bx bxl-youtube'></i></Link>
                                <Link to="#" target="_blank"><i className='bx bxl-wordpress'></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
