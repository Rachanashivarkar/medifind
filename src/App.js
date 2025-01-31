import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tesseract from 'tesseract.js';  // Import Tesseract.js
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
    const [uploadStatus, setUploadStatus] = useState('');
    const [extractedText, setExtractedText] = useState(''); // Store extracted text

    const handleFileUpload = async (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadStatus('Scanning prescription...');

            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = async () => {
                Tesseract.recognize(
                    reader.result, 
                    'eng', // Language (English)
                    {
                        logger: (m) => console.log(m), // Log progress
                    }
                ).then(({ data: { text } }) => {
                    setExtractedText(text); // Store extracted text
                    setUploadStatus('Prescription scanned successfully!');
                }).catch((error) => {
                    console.error("OCR Error:", error);
                    setUploadStatus('Error scanning prescription.');
                });
            };
        }
    };

    return (
        <Router> {}
            <Navbar /> {}
            <Routes> {}
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
                                {extractedText && (
                                    <div className="extracted-text">
                                        <h3>Extracted Medicines:</h3>
                                        <p>{extractedText}</p>
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
            <Footer /> {/* Footer */}
        </Router>
    );
}

export default App;
