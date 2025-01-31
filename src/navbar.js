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
                        <div className={`dropdown-menu ${isDropdownVisible ? 'show' : ''}`}> {/* <-- Key change here */}
                            <a href="#" onClick={() => registerAs('customer')}><p class="p">Register as Customer</p></a>
                            <a href="#" onClick={() => registerAs('medical-store')}><p class="p">Register as Medical Store</p></a>
                            <a href="#" onClick={() => registerAs('delivery-boy')}><p class="p">Register as Delivery Boy</p></a>
                        </div>
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