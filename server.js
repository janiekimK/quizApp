// Import required modules
const express = require('express');
const sqlite3 = require('sqlite3').verbose();

// Create Express app
const app = express();
const port = 3000;

// Connect to SQLite database
const db = new sqlite3.Database('quiz.db');

// Define API endpoint to fetch quiz questions
app.get('/api/questions', (req, res) => {
    db.all('SELECT * FROM questions', (err, rows) => {
        if (err) {
            console.error('Error fetching quiz questions:', err);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            res.json(rows);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
