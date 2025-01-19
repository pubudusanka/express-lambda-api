const express = require('express');
const router = express.Router();

// Route: Root endpoint
router.get('/', (req, res) => {
    res.json({ message: 'Hello from Express.js on AWS Lambda!' });
});

// Route: Greet by name
router.get('/hello/:name', (req, res, next) => {
    try {
        const name = req.params.name;
        if (!name) throw new Error('Name parameter is required');
        res.json({ message: `Hello, ${name}!` });
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});

// Route: Receive data via POST
router.post('/data', (req, res, next) => {
    try {
        const data = req.body;
        if (!data) throw new Error('No data provided');
        res.json({ message: 'Received data successfully!', data });
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});

module.exports = router;
