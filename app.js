const express = require('express');
const routes = require('./routes'); // Import the routes

// Begin Application config
const app = express();

// Middleware
app.use(express.json()); // Use Express's built-in JSON parser

// Mount routes under /api/v1/
app.use('/api/v1/', routes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

module.exports = app;
