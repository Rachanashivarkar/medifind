import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleRegisterDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const redirectToRegister = (e) => {
    const selectedRole = e.target.value;
    if (selectedRole) {
      switch (selectedRole) {
        case "customer":
          window.location.href = "/register-customer"; // Update this route
          break;
        case "medical-store":
          window.location.href = "/register-medical-store"; // Update this route
          break;
        case "delivery-boy":
          window.location.href = "/register-delivery-boy"; // Update this route
          break;
        default:
          break;
      }
    }
  };

  return (
    <div>
      <main>
        <div className="login-container">
          <h2>Login to MediFind</h2>
          <form>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />

            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="additional-links">
            <p className="forgot-password">
              <a href="/forget-password">Forgot Password?</a>
            </p>
            <p className="register-link">
              Don't have an account?{" "}
              <a href="#" onClick={toggleRegisterDropdown}>
                Register here
              </a>
              {showDropdown && (
                <select
                  id="register-options"
                  className="register-dropdown"
                  onChange={redirectToRegister}
                >
                  <option value="">Choose your role</option>
                  <option value="customer">As a Customer</option>
                  <option value="medical-store">As a Medical Store</option>
                  <option value="delivery-boy">As a Delivery Boy</option>
                </select>
              )}
            </p>
          </div>
        </div>
      </main>

    
    </div>
  );
}

export default Login;
