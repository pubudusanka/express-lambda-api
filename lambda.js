const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app'); // Import the Express app

// Create the server from the Express app
const server = awsServerlessExpress.createServer(app);

// Export the Lambda handler
exports.handler = (event, context) => {
    console.log('Event:', JSON.stringify(event));
    console.log('Context:', JSON.stringify(context));

    // Proxy the API Gateway event to the Express server
    awsServerlessExpress.proxy(server, event, context);
};
