const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

// Initialize the Express app
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 3000;

// Configure MySQL connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Aj157881!",
    port: 3307,
    database: 'hangperson'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.message);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Simple route to check the connection
app.get('/', (req, res) => {
  res.send('Hello, Node.js with MySQL!');
});

app.all('/submit', (req, res) => {
    const { firstName, email, username, pword } = req.body;
    const query = 'INSERT INTO Users (firstName, email, username, pword) VALUES (?, ?, ?, ?)';
    db.query(query, [firstName, email, username, pword], (err, results) => {
        if (err) throw err;
        res.send('User data saved successfully!');
    });
});

app.all('/login', (req, res) => {
    const { username, pword } = req.body;
    const query = 'SELECT * FROM Users WHERE username = ? && pword = ?';
    db.query(query, [username, pword], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            res.send('Login Successful!');
        }
        else {
            res.send('Invalid Login');
        }
    });
});

// Route to fetch data from a table
app.get('/data', (req, res) => {
  const query = 'SELECT * FROM your_table'; // Replace with your table name
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err.message);
      res.status(500).send('Error retrieving data');
    } else {
      res.json(results);
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});