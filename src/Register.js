import React from 'react';

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
        <div style={cardStyle} className="card">
          <h3 style={cardTitleStyle}>Card 1</h3>
          <p style={cardTextStyle}>Information about card 1.</p>
        </div>
        <div style={cardStyle} className="card">
          <h3 style={cardTitleStyle}>Card 2</h3>
          <p style={cardTextStyle}>Information about card 2.</p>
        </div>
        <div style={cardStyle} className="card">
          <h3 style={cardTitleStyle}>Card 3</h3>
          <p style={cardTextStyle}>Information about card 3.</p>
        </div>
      </div>
    </div>
  );
};

export default Register;
