import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import bike from "./images/hero img 2.png";
import Navbar from "./navbar";
import Footer from './Footer';
import Products from './Product';
import Trackorder from './Trackorder';
import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import Customer from './Customer'; 
import MedicalStore from './MedicalStore';
import DeliveryBoy from './DeliveryBoy';

function App() {
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadStatus('Prescription uploaded successfully!');
        }
    };

    const handleShopNowClick = () => {
        console.log('Shop Now button clicked');
    };

    return (
        <Router> {/* Wrap everything in Router */}
            <Navbar /> {/* Navigation bar */}
            <Routes> {/* Define Routes */}
                {/* Home Route */}
                <Route path="/" element={
                    <div>
                        <h1 className="heading">Get Medicines Delivered to Your Doorstep, Fast and Convenient!</h1>
                        <img className="hero" src={bike} height="450px" alt="Hero Bike" />
                        <div className="buttons-container">
                            <div className="upload-section">
                                <label htmlFor="upload-prescription" className="cta-button">
                                    Upload Prescription
                                </label>
                                <input
                                    type="file"
                                    id="upload-prescription"
                                    accept="image/*"
                                    capture="environment"
                                    style={{ display: 'none' }}
                                    onChange={handleFileUpload}
                                />
                                {uploadStatus && (
                                    <p id="upload-status" style={{ marginTop: '10px', color: 'green' }}>
                                        {uploadStatus}
                                    </p>
                                )}
                                <button className="cta-secondary" onClick={handleShopNowClick}>
                                    Shop Now
                                </button>
                            </div>
                        </div>
                    </div>
                } />
                
                {/* Other Routes */}
                <Route path="/products" element={<Products />} />
                <Route path="/trackorder" element={<Trackorder />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Customer" element={<Customer />} />
                <Route path="/MedicalStore" element={<MedicalStore />} />
                <Route path="/DeliveryBoy" element={<DeliveryBoy />} />
            </Routes>
            <Footer /> {/* Footer */}
        </Router>
    );
}

export default App;
