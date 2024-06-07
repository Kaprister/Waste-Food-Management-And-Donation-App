import React, { useState } from 'react';
import axios from 'axios';
import logo from '../assets/Images/logo.png';
import { toast } from 'react-toastify';


const ContactUs = () => {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [subject, setSubject] = useState("");
    const [note, setNote] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post("http://localhost:8000/api/v1/auth/contactUs", {
                username,
                email,
                subject,
                note
            });
            // Handle success response
            console.log('Message sent successfully:', response.data);
            // toast.success(response.data.message);
            alert(response.data.message);
            // Clear form fields
            setUsername('');
            setEmail('');
            setSubject('');
            setNote('');
        } catch (error) {
            // Handle error response
            console.error('Error sending message:', error);
            // toast.error("something went wrong!, try again!");
            alert("something went wrong!, try again!");
        }
    };

    return (
        <div className="contactbody">
            <section className="contact">
                <div className="contact-form">
                    <h1>Contact <span>Us</span></h1>
                    <p>We are always out there to help you! Fill out the form given below and get a reply from us within 2 business days.</p>
                    <form action="" onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Your username"
                            required
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your E-mail"
                            required
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <input
                            type="text"
                            name="subject"
                            placeholder="What brings you here?"
                            required
                            value={subject}
                            onChange={e => setSubject(e.target.value)}
                        />
                        <textarea
                            name="message"
                            cols="30"
                            rows="10"
                            placeholder="Your Message"
                            required
                            value={note}
                            onChange={e => setNote(e.target.value)}
                        ></textarea>
                        <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
