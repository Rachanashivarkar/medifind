const express = require('express');
const mysql = require('mysql2');
const app = express();
const PORT = 5000;

app.use(express.json()); // For parsing application/json

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'myuser', // replace with your MySQL username
    password: 'mypassword', // replace with your MySQL password
    database: 'contact_form_db' // replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
    } else {
        console.log('Connected to the database');
    }
});

// Handle contact form data submission
app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;
    const query = 'INSERT INTO contact_messages (name, email, message) VALUES (?, ?, ?)';
    db.query(query, [name, email, message], (err, result) => {
        if (err) {
            res.status(500).send('Error submitting form');
        } else {
            res.status(200).send('Form submitted successfully');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
