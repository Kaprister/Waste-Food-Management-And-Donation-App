import React, { useState } from 'react';
import axios from 'axios';
import logo from "../assets/Images/logo.png";
import { toast } from 'react-toastify';


const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        phoneNumber: "",
        address: "",
        food: "",
        quantity: "",
        foodDate: "",
        note: ""
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/api/v1/auth/donate", {
                username: formData.username,
                email: formData.email,
                phoneNumber: formData.phoneNumber,
                food: formData.food,
                quantity: formData.quantity,
                note: formData.note
            });
            // Handle success response
            // console.log('Donation submitted successfully:', response.data);
            // toast.success(response.data.message);
            alert(response.data.message);
            // Clear form fields
            setFormData({
                username: "",
                email: "",
                phoneNumber: "",
                address: "",
                food: "",
                quantity: "",
                foodDate: "",
                note: ""
            });
        } catch (error) {
            // Handle error response
            console.error('Error submitting donation:', error);
            // toast.error("something went wrong!, try again!");
            alert("something went wrong!, try again!");


        }
    };

    return (
        <div className="register-body">
            <section className="registration">
                <div className="register-form">
                    <h1>Donate <span>Food</span></h1>
                    <p>It's not how much we give, but how much love we put into giving!</p>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="username"
                            placeholder="Your username"
                            id="name"
                            required
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            type="tel"
                            name="phoneNumber"
                            placeholder="Your Phone No."
                            id="phonenum"
                            required
                            value={formData.phoneNumber}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="address"
                            placeholder="Collection Address"
                            required
                            value={formData.address}
                            onChange={handleChange}
                        />
                        <h4>Category</h4>
                        <input
                            type="radio"
                            name="food"
                            value="veg"
                            required
                            checked={formData.food === "veg"}
                            onChange={handleChange}
                        /> Veg &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <input
                            type="radio"
                            name="food"
                            value="non-veg"
                            checked={formData.food === "non-veg"}
                            onChange={handleChange}
                        /> Non-Veg &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                        <input
                            type="radio"
                            name="food"
                            value="both"
                            checked={formData.food === "both"}
                            onChange={handleChange}
                        /> Both
                        <h4>Quantity (in Kg)</h4>
                        <input
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                        />
                        <h4>Food Preparation Date and Time</h4>
                        <input
                            type="datetime-local"
                            name="foodDate"
                            required
                            value={formData.foodDate}
                            onChange={handleChange}
                        />
                        <br /><br />
                        <textarea
                            name="note"
                            cols="2"
                            rows="3"
                            placeholder="Special Note"
                            value={formData.note}
                            onChange={handleChange}
                        ></textarea>
                        <br /><br />
                        <input
                            type="checkbox"
                            name="t&c"
                            required
                        /> I accept the Terms & Conditions.
                        <br />
                        <input type="submit" value="Submit" className="submitbtn" />
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;
