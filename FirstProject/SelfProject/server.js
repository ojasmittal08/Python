
document.querySelector('form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    const result = await response.json();
    alert(result.message);
    if (result.success) showHomePage();
});

const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const app = express();

// Mock database (use a real DB like MySQL/MongoDB in production)
const users = [
    { 
        id: 1, 
        username: "admin", 
        // Password is hashed (never store plain passwords!)
        password: "$2a$10$N9qo8uLOickgx2ZMRZoMy.Mrq4L0XUQk1qL2YFfDPQe3HMBW9js6O" // "admin123" hashed
    }
];

app.use(bodyParser.json());
app.use(express.static('public')); // Serve HTML files

// Login endpoint
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (user && bcrypt.compareSync(password, user.password)) {
        res.json({ success: true, message: "Login successful!" });
    } else {
        res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));