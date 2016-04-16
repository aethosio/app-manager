import express from 'express';

var debug = require('debug')('aether:appmanager');

// Define a new api subroute for requests that
// start with /api/applications
const router = express.Router();

global.app.use('/api/applications', router);

// Get all of the applications
router.get( (req, res) => {

});

// TODO Add REST API for applications.
