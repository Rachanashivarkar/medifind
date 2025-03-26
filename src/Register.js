import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import customerImg from './images/Customer.png';
import medicalStoreImg from './images/Medical.png';
import deliveryBoyImg from './images/Delievery boy.png';

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
    width: '220px',
    minHeight: '300px',
    cursor: 'pointer', 
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', 
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };
  const cardHoverStyle = {
    transform: 'scale(1.05)', 
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
  };

  const cardTitleStyle = {
    marginBottom: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  const cardTextStyle = {
    fontSize: '14px',
    color: '#555',
    marginTop: '8px',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginBottom: '10px',
  };

  return (
    <div style={registerPageStyle}>
      <h2>Register</h2>
      {/* Cards Container */}
      <div style={cardsContainerStyle}>
        {/* Card 1 - Customer */}
        <Link to="/Customer" style={{ textDecoration: 'none', color: 'black' }}>
          <div style={cardStyle} className="card">
            <img src={customerImg} alt="Customer" style={imageStyle} />
            <h3 style={cardTitleStyle}>Register as a Customer</h3>
            <p style={cardTextStyle}>Get medicines delivered to your doorstep.</p>
          </div>
        </Link>

        {/* Card 2 - Medical Store */}
        <Link to="/MedicalStore" style={{ textDecoration: 'none', color: 'black' }}>
          <div style={cardStyle} className="card">
            <img src={medicalStoreImg} alt="Medical Store" style={imageStyle} />
            <h3 style={cardTitleStyle}>Register as a Medical Store</h3>
            <p style={cardTextStyle}>Sell your medicines online with ease.</p>
          </div>
        </Link>

        {/* Card 3 - Delivery Boy */}
        <Link to="/DeliveryBoy" style={{ textDecoration: 'none', color: 'black' }}>
          <div style={cardStyle} className="card">
            <img src={deliveryBoyImg} alt="Delivery Boy" style={imageStyle} />
            <h3 style={cardTitleStyle}>Register as a Delivery Boy</h3>
            <p style={cardTextStyle}>Deliver medicines quickly and efficiently.</p>
          </div>
        </Link>
        
      </div>
    </div>
  );
};

export default Register;
