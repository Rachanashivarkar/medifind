import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

import bell from "./images/bell.png";
import cart from "./images/shopping-cart (4).png";
import CartContext from './CartContext'; // Import CartContext

function Navbar() {
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const { cartItems } = useContext(CartContext); // Access cartItems from context
    const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const toggleRegisterDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const registerAs = (role) => {
        console.log(`Register as ${role}`);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-menu") && !event.target.closest(".register-link")) {
                setIsDropdownVisible(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <nav>
                <div className="logo">MediFind</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/track-order">Track Order</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
                <div className="nav-actions">
                    <div className="search-bar">
                        <input type="text" placeholder="Search medicines..." />
                    </div>
                    <Link to="/cart" className="cart-icon"> {/* Link to cart page */}
                        <img src={cart} alt="Cart Icon" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>} {/* Display count */}
                    </Link>
                    <div className="notification-icon" id="reminder-button">
                        <img src={bell} height="25px" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;