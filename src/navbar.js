import React, { useState } from 'react';
import './navbar.css';
import bell from "./images/bell.png";
import cart from "./images/shopping-cart (4).png";

function Navbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const toggleRegisterDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const registerAs = (role) => {
        // Handle register action (can be redirected or processed)
        console.log(`Register as ${role}`);
    };

    return (
        <div>
            <nav>
                <div className="logo">MediFind</div>
                <ul className="nav-links">
                    <li><a href="./../index.html">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Track Order</a></li>
                    <li>
                        <a href="#" onClick={toggleRegisterDropdown}>Register</a>
                        {isDropdownVisible && (
                            <div id="register-dropdown" className="dropdown-menu">
                                <a href="./Pages/customer.html" onClick={() => registerAs('user')}>Register as Customer</a>
                                <a href="./Pages/medical.html" onClick={() => registerAs('medical-store')}>Register as Medical Store</a>
                                <a href="./Pages/doctor.html" onClick={() => registerAs('doctor')}>Register as Doctor</a>
                            </div>
                        )}
                    </li>
                    <li><a href="./login.html">Login</a></li>
                    <li><a href="./contact.html">Contact Us</a></li>
                </ul>
                <div className="nav-actions">
                    <div className="search-bar">
                        <input type="text" placeholder="Search medicines..." />
                    </div>
                    <div className="cart-icon">
                        <img src={cart} alt="Cart Icon" />
                    </div>
                    <div className="notification-icon" id="reminder-button">
                        <img src={bell} height="25px" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </nav>

            
        </div>
        
    );
}


export default Navbar;
