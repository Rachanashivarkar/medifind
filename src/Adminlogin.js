import React, { useState } from 'react';
import './Adminlogin.css'; // Import CSS for styling

function Adminlogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // Add authentication logic here
        console.log("Admin Email:", email);
        console.log("Admin Password:", password);
    };

    return (
        <div className="admin-login-container">
            <h2>Admin Login</h2>
            <form onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email:</label>
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Password:</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                </div>
                <button type="submit" className="login-btn">Login</button>
            </form>
        </div>
    );
}

export default Adminlogin;
