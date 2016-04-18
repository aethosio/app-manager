import express from 'express';

var debug = require('debug')('aether:appmanager');

// Define a new api subroute for requests that
// start with /api/applications
const router = express.Router();

global.app.use('/api/applications', router);

// Get all of the applications
router.get( (req, res) => {

});

router.post('/:app', (req, res) => {
  // Get the command, which for now is simply "open"
  const command = req.params.command;


});

class AppManager {
  constructor() {

  }

  handleCommand(command, req, res) {
    if (['open'].indexof(command) >= 0) {
      return this[command](req, res);
    }
  }

  open(req, res) {

  }
}

// TODO Use a plugin system to construct this
global.appmanager = new AppManager();

// TODO Add REST API for applications.
