import express from 'express';

var debug = require('debug')('aether:appmanager');

// Define a new api subroute for requests that
// start with /api/applications
const router = express.Router();

global.app.use('/api/applications', router);

// Get all of the applications
router.get( (req, res) => {

});

router.post('/:app_id', (req, res) => {
  // Get the command, which for now is simply "open"
  const app_id = req.params.app_id;
  const command = req.body.command;

  debug(command + " " + app_id);
  global.appManager.handleCommand(command, req, res);
});

class AppManager {
  constructor() {

  }

  handleCommand(command, req, res) {
    if (['open'].indexOf(command) >= 0) {
      return this[command](req, res);
    }
  }

  open(req, res) {
    res.send({status: "ok"});
  }
}

// TODO Use a plugin system to construct this
global.appManager = new AppManager();

// TODO Add REST API for applications.
