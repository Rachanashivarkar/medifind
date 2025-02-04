import React, { useState, useRef } from 'react';
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
import Forget from './Forget';

function App() {
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null); // Reference for file input

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setImageSrc(reader.result);
            };
        }
    };

    const removeImage = () => {
        setImageSrc(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ''; // Reset file input
        }
    };

    return (
        <Router>
            <Navbar />
            <Routes>
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
                                    ref={fileInputRef} // Assign ref to input
                                />

                                {/* Display Uploaded Image */}
                                {imageSrc && (
                                    <div className="uploaded-image-container">
                                        <img src={imageSrc} alt="Prescription Preview" className="uploaded-image" />
                                        <button className="remove-image" onClick={removeImage}>×</button>
                                    </div>
                                )}

                                <button className="cta-secondary">
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
                <Route path="/Forget" element={<Forget />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
