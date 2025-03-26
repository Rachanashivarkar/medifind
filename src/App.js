import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";
import bike from "./images/hero img 2.png";
import Navbar from "./navbar";
import Footer from './Footer';
import Products from './Products'; 
import Trackorder from './Trackorder';
import Adminlogin from './Adminlogin';
import Register from './Register';
import Login from './Login';
import Contact from './Contact';
import Customer from './Customer';
import MedicalStore from './MedicalStore';
import Loginas from './Loginas';
import DeliveryBoy from './DeliveryBoy';
import Forget from './Forget';
import PrivacyPolicy from './Privacy-policy';
import TermsAndConditions from './Terms-condition';
import { CartProvider } from './CartContext'; // Import CartProvider
import Cart from './Cart';
import Profile from './Profile';


function App() {
    return (
        <Router>
            <CartProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <div>
                            <h1 className="heading">Get Medicines Delivered to Your Doorstep, Fast and Convenient!</h1>
                            <img className="hero" src={bike} height="450px" alt="Hero Bike" />
                            <div className="buttons-container">
                                {/* ... (rest of your home page content) */}
                            </div>
                        </div>
                    } />

                    <Route path="/products" element={<Products />} /> {/* Use Products component */}
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
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/Login-as" element={<Loginas />} />
                    <Route path="/adminlogin" element={<Adminlogin />} />
                </Routes>
                <Footer />
            </CartProvider>
        </Router>
    );
}

export default App;