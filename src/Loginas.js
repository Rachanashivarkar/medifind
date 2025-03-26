import React from 'react';
import { Link } from 'react-router-dom';
import customerImg from './images/Customer.png';
import adminImg from './images/admin.png';

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
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  padding: '15px',
  width: '190px', 
  minHeight: '230px', 
  cursor: 'pointer',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  border: '1px solid #ddd',
};

const cardHoverStyle = {
  transform: 'scale(1.05)',
  boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
};

const cardTitleStyle = {
  fontSize: '16px',
  fontWeight: 'bold',
  marginBottom: '8px',
};

const imageStyle = {
  width: '100px', 
  height: '100px',
  marginBottom: '10px',
};

const buttonStyle = {
  marginTop: '8px',
  padding: '8px 12px',
  fontSize: '13px',
  fontWeight: 'bold',
  border: 'none',
  borderRadius: '6px',
  background: 'green',
  color: '#fff',
  cursor: 'pointer',
  transition: '0.3s',
};

const buttonHoverStyle = {
  background: 'dark green',
};

function Loginas() {
  return (
    <div style={registerPageStyle}>
      <h2>Login As</h2>

      <div style={cardsContainerStyle}>
       
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}>
          <div
            style={{ ...cardStyle, transition: '0.3s' }}
            className="card"
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <img src={customerImg} alt="Customer" style={imageStyle} />
            <p style={cardTitleStyle}>Customer</p>
            <button
              style={buttonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
            >
              Login
            </button>
          </div>
        </Link>

       
        <Link to="/adminlogin" style={{ textDecoration: 'none', color: 'black' }}>
          <div
            style={{ ...cardStyle, transition: '0.3s' }}
            className="card"
            onMouseOver={(e) => Object.assign(e.currentTarget.style, cardHoverStyle)}
            onMouseOut={(e) => Object.assign(e.currentTarget.style, cardStyle)}
          >
            <img src={adminImg} alt="Admin" style={imageStyle} />
            <p style={cardTitleStyle}>Admin</p>
            <button
              style={buttonStyle}
              onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
              onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
            >
              Login
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Loginas;
