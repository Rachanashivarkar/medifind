import React, { useState } from 'react';
import "./App.css";
import bike from "./images/hero img 2.png";
import Navbar from "./navbar";
import Footer from './Footer';

function App() {
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setUploadStatus('Prescription uploaded successfully!');
        }
    };

    const handleShopNowClick = () => {
        // Handle the Shop Now button click logic here
        console.log('Shop Now button clicked');
    };

    return (
        <div>
            <Navbar />
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
            <Footer/> 
        </div>
    );
}

export default App;
