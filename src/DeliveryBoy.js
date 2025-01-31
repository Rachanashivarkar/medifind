import React, { useState } from "react";

function DeliveryBoyRegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    vehicleType: "",
    vehicleNumber: "",
    licenseNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    // Validate form
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.address ||
      !formData.vehicleType ||
      !formData.vehicleNumber ||
      !formData.licenseNumber ||
      !formData.password
    ) {
      setErrorMessage("Please fill out all fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    // Mock successful registration
    setSuccessMessage("Registration successful! Welcome to the delivery team.");
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      address: "",
      vehicleType: "",
      vehicleNumber: "",
      licenseNumber: "",
      password: "",
      confirmPassword: "",
    });
  };

  // Inline styles
  const styles = {
    container: {
      maxWidth: "500px",
      margin: "auto",
      padding: "50px",
      border: "1px solid #ccc",
      borderRadius: "8px",
      backgroundColor: "#f9f9f9",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontWeight: "bold",
    },
    input: {
      width: "100%",
      padding: "8px",
      marginBottom: "16px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    button: {
      width: "100%",
      padding: "10px",
      backgroundColor: "#22562df3",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    buttonHover: {
      backgroundColor: "#22562d",
    },
    messageSuccess: { color: "green", textAlign: "center", marginTop: "10px" },
    messageError: { color: "red", textAlign: "center", marginTop: "10px" },
  };

  return (
    <div style={styles.container}>
      <h2>Delivery Boy Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="fullName" style={styles.label}>
          Full Name:
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="phone" style={styles.label}>
          Phone Number:
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="address" style={styles.label}>
          Address:
        </label>
        <input
          type="text"
          id="address"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="vehicleType" style={styles.label}>
          Vehicle Type:
        </label>
        <input
          type="text"
          id="vehicleType"
          name="vehicleType"
          value={formData.vehicleType}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="vehicleNumber" style={styles.label}>
          Vehicle Number:
        </label>
        <input
          type="text"
          id="vehicleNumber"
          name="vehicleNumber"
          value={formData.vehicleNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="licenseNumber" style={styles.label}>
          License Number:
        </label>
        <input
          type="text"
          id="licenseNumber"
          name="licenseNumber"
          value={formData.licenseNumber}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="password" style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label htmlFor="confirmPassword" style={styles.label}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <button
          type="submit"
          style={styles.button}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#22562dd")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#22562df")}
        >
          Register
        </button>
      </form>

      {successMessage && <p style={styles.messageSuccess}>{successMessage}</p>}
      {errorMessage && <p style={styles.messageError}>{errorMessage}</p>}
    </div>
  );
}

export default DeliveryBoyRegistrationForm;
