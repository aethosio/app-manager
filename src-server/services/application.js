import express from 'express';

// Define a new api subroute for requests that
// start with /api/applications
const router = express.Router();

global.app.use('/api/applications', router);

// TODO Add REST API for applications.
