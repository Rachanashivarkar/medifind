import React, { useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
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
import PrivacyPolicy from './Privacy-policy';
import TermsAndConditions from './Terms-condition';
import CartContext from './CartContext';
import Cart from './Cart';


function App() {
    const [imageSrc, setImageSrc] = useState(null);
    const fileInputRef = useRef(null);
    const [cartItems, setCartItems] = useState([]);

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
            fileInputRef.current.value = '';
        }
    };

    const addToCart = (product) => {
        const existingProduct = cartItems.find(item => item.id === product.id);
        if (existingProduct) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    return (
        <Router>
            <CartContext.Provider value={{ cartItems, addToCart }}>
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
                                        ref={fileInputRef}
                                    />

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

                    <Route path="/products" element={<Products />} />
                    <Route path="/trackorder" element={<Trackorder />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/Customer" element={<Customer />} />
                    <Route path="/MedicalStore" element={<MedicalStore />} />
                    <Route path="/DeliveryBoy" element={<DeliveryBoy />} />
                    <Route path="/Forget" element={<Forget />} />
                    <Route path="/privacy" element={<PrivacyPolicy />} />
                    <Route path="/terms" element={<TermsAndConditions />} />
                    <Route path="/cart" element={<Cart />} />
                </Routes>
                <Footer />
            </CartContext.Provider>
        </Router>
    );
}

export default App;