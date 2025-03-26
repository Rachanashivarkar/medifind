import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import bell from "./images/bell.png";
import cart from "./images/shopping-cart (4).png";
import { useCart } from './CartContext';

const Navbar = () => {
    const { cartItems, loading } = useCart();
    const cartCount = loading ? 0 : cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div>
            <nav>
                <div className="logo">MediFind</div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/products">Products</Link></li>
                    <li><Link to="/track-order">Track Order</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                    <li><Link to="/Login-as">Login</Link></li>
                 
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/profile">Profile</Link></li> 
                </ul>
                <div className="nav-actions">
                    <div className="search-bar">
                        <input type="text" placeholder="Search medicines..." />
                    </div>
                    <Link to="/cart" className="cart-icon">
                        <img src={cart} alt="Cart Icon" />
                        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                    </Link>
                    <div className="notification-icon" id="reminder-button">
                        <img src={bell} height="25px" style={{ cursor: 'pointer' }} />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;