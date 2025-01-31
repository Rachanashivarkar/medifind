import React, { useState } from "react";

function ForgetPassword() {
  const [email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [captcha, setCaptcha] = useState("");

  // Generate a simple captcha
  const generateCaptcha = () => {
    const randomNum = Math.random().toString(36).substring(2, 8);
    setCaptcha(randomNum);
  };

  // Handle the reset request
  const handlePasswordReset = (e) => {
    e.preventDefault();

    // Clear previous messages
    setSuccessMessage("");
    setErrorMessage("");

    // Mock validation
    if (!email) {
      setErrorMessage("Please enter your email address.");
      return;
    }

    if (captcha !== document.getElementById("captchaInput").value) {
      setErrorMessage("Captcha does not match. Please try again.");
      return;
    }

    // Mock success response
    setSuccessMessage(
      "A password reset link has been sent to your email. Please check your inbox."
    );
    setEmail("");
    generateCaptcha(); // Reset captcha
  };

  // Inline styles
  const styles = {
    wrapper: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      backgroundColor: "#f9f9f95",
    },
    container: {
      maxWidth: "400px",
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
      backgroundColor: "#22562d",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
    },
    messageSuccess: { color: "green", textAlign: "center" },
    messageError: { color: "red", textAlign: "center" },
    captcha: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "16px",
    },
  };

  // Generate the initial captcha
  React.useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <h2>Forgot Password</h2>
        <form onSubmit={handlePasswordReset}>
          <label htmlFor="email" style={styles.label}>
            Enter your registered email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />

          <div style={styles.captcha}>
            <span
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#555",
                padding: "10px",
                backgroundColor: "#e0e0e0",
                borderRadius: "4px",
              }}
            >
              {captcha}
            </span>
            <button
              type="button"
              onClick={generateCaptcha}
              style={{
                ...styles.button,
                width: "auto",
                padding: "6px 12px",
              }}
            >
              Refresh
            </button>
          </div>

          <input
            type="text"
            id="captchaInput"
            name="captchaInput"
            placeholder="Enter the captcha above"
            required
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#1a4422")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#22562d")}
          >
            Send Reset Email
          </button>
        </form>

        {successMessage && (
          <p style={styles.messageSuccess}>{successMessage}</p>
        )}
        {errorMessage && <p style={styles.messageError}>{errorMessage}</p>}
      </div>
    </div>
  );
}

export default ForgetPassword;
