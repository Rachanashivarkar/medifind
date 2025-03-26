import React, { useState } from "react";
import { db, auth } from './firebase';
import { collection, addDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

function CustomerRegistrationForm({ registrationType }) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
        ...(registrationType === "medicalStore" && { licenseNumber: "" }),
        ...(registrationType === "deliveryBoy" && { vehicleType: "" }),
    });

    const [successMessage, setSuccessMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");
        setErrorMessage("");

        if (!formData.name || !formData.email || !formData.phone || !formData.password) {
            setErrorMessage("Please fill out all fields.");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Passwords do not match.");
            return;
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                formData.email,
                formData.password
            );
            const user = userCredential.user;

            const usersCollection = collection(db, "users");
            await addDoc(usersCollection, {
                uid: user.uid,
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                registrationType: registrationType,
                ...(registrationType === "medicalStore" && { licenseNumber: formData.licenseNumber }),
                ...(registrationType === "deliveryBoy" && { vehicleType: formData.vehicleType }),
            });

            setSuccessMessage("Registration successful! You can now log in.");
            setFormData({
                name: "", email: "", phone: "", password: "", confirmPassword: "",
                ...(registrationType === "medicalStore" && { licenseNumber: "" }),
                ...(registrationType === "deliveryBoy" && { vehicleType: "" }),
            });
            navigate('/login');

        } catch (error) {
            console.error("Registration error:", error);
            setErrorMessage(error.message);
        }
    };

    const styles = {
        container: {
            maxWidth: "400px",
            margin: "auto",
            padding: "40px",
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
        buttonHover: {
            backgroundColor: "#0056b3",
        },
        messageSuccess: {
            color: "green",
            textAlign: "center",
            marginTop: "10px"
        },
        messageError: {
            color: "red",
            textAlign: "center",
            marginTop: "10px"
        },
    };

    return (
        <div style={styles.container}>
            <h2>{registrationType === "customer" ? "Customer Registration" :
                registrationType === "medicalStore" ? "Medical Store Registration" :
                    registrationType === "deliveryBoy" ? "Delivery Boy Registration" : "Registration"}</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name" style={styles.label}>Full Name:</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required style={styles.input} />

                <label htmlFor="email" style={styles.label}>Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required style={styles.input} />

                <label htmlFor="phone" style={styles.label}>Phone Number:</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required style={styles.input} />

                <label htmlFor="password" style={styles.label}>Password:</label>
                <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} required style={styles.input} />

                <label htmlFor="confirmPassword" style={styles.label}>Confirm Password:</label>
                <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required style={styles.input} />

                {registrationType === "medicalStore" && (
                    <div>
                        <label htmlFor="licenseNumber" style={styles.label}>License Number:</label>
                        <input type="text" id="licenseNumber" name="licenseNumber" value={formData.licenseNumber} onChange={handleChange} required style={styles.input} />
                    </div>
                )}

                {registrationType === "deliveryBoy" && (
                    <div>
                        <label htmlFor="vehicleType" style={styles.label}>Vehicle Type:</label>
                        <input type="text" id="vehicleType" name="vehicleType" value={formData.vehicleType} onChange={handleChange} required style={styles.input} />
                    </div>
                )}

                <button type="submit" style={styles.button}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = "#1e4b22")}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = "#22562d")}
                >
                    Register
                </button>
            </form>

            {successMessage && <p style={styles.messageSuccess}>{successMessage}</p>}
            {errorMessage && <p style={styles.messageError}>{errorMessage}</p>}
        </div>
    );
}

export default CustomerRegistrationForm;
