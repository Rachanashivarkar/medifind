import React from 'react';
import './Footer.css'; 
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer>
        <p>© 2024 MediFind | <Link to="/Privacy-policy">Privacy Policy</Link> | <Link to="/Terms-condition">Terms of Service</Link></p>
        <p>Contact us at: support@medifind.com</p>
    </footer>
    );
}

export default Footer;
