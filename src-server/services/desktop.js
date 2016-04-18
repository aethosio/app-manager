import express from 'express';

var debug = require('debug')('aether:appmanager');

const router = express.Router();

global.app.use('/api/desktop', router);

router.get('/icons', (req, res) => {
  debug("returning icons");

  // TODO Return the icons (not the actual icons, just a URL to the
  // icon resource and possibly some meta data associated with it);
  var icons = [];

  // TODO Don't hard-code these
  icons.push({
    icon_url: "advancedsettings.png",
    name: "Settings",
    notifications: 0
  });

  icons.push({
    icon_url: "addressbook.png",
    name: "Addresses",
    notifications: 1
  });

  icons.push({
    icon_url: "schedule.png",
    name: "Calendar",
    notifications: 0
  });

  icons.push({
    icon_url: "graphics.png",
    name: "Draw",
    notifications: 0
  });

  res.send(icons);
});
