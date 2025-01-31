import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Register = () => {
  const registerPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
  };

  const cardsContainerStyle = {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const cardStyle = {
    backgroundColor: '#f4f4f4',
    borderRadius: '8px',
    padding: '20px',
    width: '200px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s',
  };

  const cardHoverStyle = {
    transform: 'translateY(-10px)',
  };

  const cardTitleStyle = {
    marginBottom: '10px',
  };

  const cardTextStyle = {
    fontSize: '14px',
    color: '#555',
  };

  return (
    <div style={registerPageStyle}>
      <h2>Register</h2>
      {/* Cards Container */}
      <div style={cardsContainerStyle}>
        {/* Card 1 */}
        <Link to="/Customer" style={{ textDecoration: 'none' }}>
          <div style={cardStyle} className="card">
            <h3 style={cardTitleStyle}>Register as a Customer</h3>
            <p style={cardTextStyle}>Information about card 1.</p>
          </div>
        </Link>

        {/* Card 2 */}
        <Link to="/MedicalStore" style={{ textDecoration: 'none' }}>
          <div style={cardStyle} className="card">
            <h3 style={cardTitleStyle}>Register as a Medical store</h3>
            <p style={cardTextStyle}>Information about card 2.</p>
          </div>
        </Link>

        {/* Card 3 */}
        <Link to="/DeliveryBoy" style={{ textDecoration: 'none' }}>
          <div style={cardStyle} className="card">
            <h3 style={cardTitleStyle}>Register as a Delivery boy</h3>
            <p style={cardTextStyle}>Information about card 3.</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Register;
