import React from 'react';
import logo from '../assets/Images/logo.png';
import bg from '../assets/Images/bg.jpg';
import img1 from '../assets/Images/1.jpg';
import img2 from '../assets/Images/2.jpg';
import img3 from '../assets/Images/3.jpg';
import img4 from '../assets/Images/4.jpg';
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            {/* Background & Header */}
            <div className="banner">
                <img src={bg} alt="Background" />
                
                
                {/* Header */}
                <div className="content" id="home">
                    <div className="title">
                        <h1>FoodYard</h1>
                        <p>“If you’re throwing away food, you’re throwing away life.” – Anthony Bourdain</p>
                        <Link to="/joinUs" className="button">Donate Food!</Link>
                    </div>
                </div>
            </div>

            {/* What is food waste? */}
            <section className="container">
                <div className="text">
                    <h2>What is Food Waste?</h2>
                </div>
                <div className="rowitems">
                    <div className="container-box">
                        <h4>Food waste is any type of food that is discarded or not eaten. It can include uneaten food from meals, spoiled food, trimmings from food preparation, and food products that have been damaged and deemed unfit for human consumption.</h4> 
                        <h2>Types of food waste:</h2>
                        <h4>
                            1) Fruit and Vegetable waste <br />
                            2) Beverage waste <br />
                            3) Fish, Meat & Poultry waste <br />
                            4) Sugar Industry waste <br />
                            5) Dairy waste <br />
                            6) Mineral waste <br />
                            7) Oil residue waste
                        </h4>
                        <br />
                        <h4>Below are few images from the hostel mess of HIT Haldia.</h4>
                        <br />
                        <img src={img1} alt="Image 1" />
                        <img src={img2} alt="Image 2" />
                    </div>
                </div>
            </section>

            {/* What is food waste management? */}
            <section className="fwmanage" id="fwmanage">
                <div className="fwm-title">
                    <h2>What is food waste management system?</h2>
                </div>
                <div className="container-box">
                    <h4>
                        Food waste management systems are designed to reduce the amount of food waste created by businesses and households. These systems typically involve practices such as composting, recycling, and anaerobic digestion. Additionally, food waste management systems often include education and awareness campaigns to help people understand how their food choices impact the environment. Such systems can also involve infrastructure changes, such as the implementation of collection systems that make it easier for businesses and households to separate and properly dispose of their food waste. Every day, food businesses throw out high-quality, delicious food. It could be pallets of fresh bell peppers that aren’t the ideal shape. Or carrots that are a little crooked. Or milk that was over-ordered for a local school district. Point is, it’s food that could feed people rather than ending up in a landfill. In India, the larger the marriage, the larger the party, and also the additional stupendous the waste. No doubt weddings and banquets are an enormous supply of food wastage, however, restaurants and hotels conjointly contribute to food wastage. Nearly 14% of the total food produced globally is lost between the harvest and retail stages. India's contribution to wasted food, at 68.8 million tonnes annually, is 7% of the global total, per the United Nations Environment Programme's Food Waste Index Report 2021. <br /><br />
                        Here, <span>FoodYard</span> comes into picture. We came up with an initiative to reduce the food wastage and hunger as much as possible with the goal of zero hunger and responsible consumption and production. We have our outlets in different parts of the country. We are in contact with some banquets. We collect the donated food and distribute it among the people who need it. <br /><br />
                        <center>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/1MpfEeSem_4?si=O4Y2qyStIlZVit_p" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                        </center>
                    </h4>
                </div>
            </section>

            {/* How can we manage food waste? */}
            <section className="fwm" id="fwm">
                <div className="fwm-title">
                    <h2>How can we manage food waste?</h2>
                </div>
                <div className="container-box">
                    <h4>
                        Here are few steps which we can follow in order to minimize food wastage: <br />
                        1) Reduce food waste at home by buying only what you need, planning meals, and storing food properly. <br />
                        2) Compost food scraps to create nutrient-rich soil for plants. <br />
                        3) Donate extra food to food banks, shelters, and other organizations. <br />
                        4) Recycle food packaging and containers. <br />
                        5) Use leftovers creatively in new meals and recipes. <br />
                        6) Contact your local government to find out what food waste programs are available in your area. <br /><br />
                        
                        Solutions for food waste management in India: <br />
                        1)<span>Recycle by Composting:</span> Food producers will solve 100% of their waste matter issues by merely organizing a good composting strategy. And doing therefore not solely eliminates waste, it saves you cash as a result of you don’t have to be compelled to “outsource” your compost production. <br />
                        2)<span>Turn Wasted Food into Animal Feed:</span> Cultivating compost is a method to recycle food, however it also can be drained of the bellies of cows, sheep, pigs, and alternative ethereal (themselves destined to become food). <br />
                        3)<span>Use Waste Food to provide Products:</span> From biofuels to liquid fertilizer, there are several helpful merchandises that may be factory-made from bound styles of waste foods, and infrequently “leftovers” of one company might be helpful in another business for the food scrap. <br />
                        4)<span>Source Reduction and Food Donation:</span> The easiest method to curtail waste matter is to simply turn out less whenever production is clearly resulting in waste. Once excess foodstuffs are still safe to eat, there will be hungry and poor people who realize it troublesome to afford decent food in today’s dear economy.
                    </h4>
                    <center>
                        <iframe width="585" height="298" src="https://www.youtube.com/embed/KZf9_GdDff0" title="5 tips to reduce food waste" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </center>
                </div>
            </section>

            {/* Together We Can! */}
            <section className="fwm" id="fwm">
                <div className="fwm-title">
                    <h2>Together We Can!</h2>
                </div>
                <div className="container-box">
                    <h4>
                        We are trying our best to solve the problem of food waste and its management. But we need help from your side as well. Apart from donating food, you can contribute much more towards the society. 
                        <a href="https://economictimes.indiatimes.com/news/economy/indicators/estimated-931-mn-tonnes-of-food-wasted-globally-in-2019-indias-share-68-mn-un-report/articleshow/81345719.cms" target="_blank" rel="noopener noreferrer">Click here</a> to view how much food was wasted globally in 2019. There are few books available on food waste and its management. Some of them are: <br />
                        {/* 1) Food Waste Management: Principles and Practices - Ram K. Vashist, Neelam Dhingra <br /> */}
                        1) Achieving Zero Food Waste: Strategies and Solutions for Food Service and Retail Operations - Andrew Shakman and Martin K. Law <br /><br />
                        We recommend you to read the books mentioned above and actively participate in food waste awareness campaigns. <br />
                        Lovely Professional University NSS had organized food waste awareness week. 
                        {/* <a href="https://happenings.lpu.in/lpu-nss-organizes-food-waste-awareness-week/" target="_blank" rel="noopener noreferrer">Click here</a> to view the details.  */}
                        <br /><br />
                        <center>
                            <img src={img3} alt="Image 3" /> 
                            <img src={img4} alt="Image 4" />
                        </center>
                        <br />
                        You can find us on Google - 'Food waste management system in India' or 'FoodYard'.
                    </h4>
                </div>
            </section>

            {/* Newsletter */}
            <section className="newsletter">
                <div className="newstext">
                    <h2>Newsletter</h2>
                    <p>Subscribe to Get updates on events, <br /> volunteer opportunities and other news.</p>
                </div>
                <div className="send">
                    <form action="">
                        <input type="email" name="emailid" placeholder="E-mail" required />
                        <input type="submit" value="Subscribe" />
                    </form>
                </div>
            </section>

        </div>
    );
}

export default Home;
