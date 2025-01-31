import React, { useState } from 'react';
import './Contact.css';

function ContactUs() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
    };

    return (
        <section className="contact-us">
            <div className="contact-form-box"> {/* Added a box container */}
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns, feel free to reach out to us. We're here to help!</p>
                
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Full Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows="4" 
                            value={formData.message} 
                            onChange={handleInputChange} 
                            required 
                        ></textarea>
                    </div>

                    <button type="submit" className="cta-button">Send Message</button>
                </form>
            </div>
        </section>
    );
}

export default ContactUs;
