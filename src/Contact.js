import React, { useState } from 'react';
import './Contact.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submittedData, setSubmittedData] = useState(null);
    const [submissionStatus, setSubmissionStatus] = useState('');

    // handle input change for all form fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // form submission handler
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);

        // Simulate form submission and display the submitted data
        setSubmittedData(formData);
        setSubmissionStatus('Form submitted successfully!');
    };

    return (
        <>
            <section className="contact-us">
                <div className="contact-form-box">
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

                    {/* Display submission status */}
                    {submissionStatus && <p className="submission-status">{submissionStatus}</p>}

                    {/* Display submitted data */}
                    {submittedData && (
                        <div className="submitted-data">
                            <h3>Your Submitted Data:</h3>
                            <p><strong>Name:</strong> {submittedData.name}</p>
                            <p><strong>Email:</strong> {submittedData.email}</p>
                            <p><strong>Message:</strong> {submittedData.message}</p>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
};

export default ContactUs;
