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
    icon_url: "addressbook.png",
    app_name: "Addresses",
    app_id: "addresses",
    notifications: 1
  });

  icons.push({
    icon_url: "schedule.png",
    app_name: "Calendar",
    app_id: "calendar",
    notifications: 0
  });

  icons.push({
    icon_url: "graphics.png",
    app_name: "Draw",
    app_id: "draw",
    notifications: 0
  });

  icons.push({
    icon_url: "MetaZen.png",
    app_name: "MetaZen Editor",
    app_id: "metazen_editor",
    notifications: 0
  });

  icons.push({
    icon_url: "calc.png",
    app_name: "Calculator",
    app_id: "calculator",
    notifications: 0
  });

  icons.push({
    icon_url: "cookbook.png",
    app_name: "Cook Book",
    app_id: "cookbook",
    notifications: 0
  });

  icons.push({
    icon_url: "book.png",
    app_name: "Encyclopedia",
    app_id: "encylopedia",
    notifications: 0
  });

  icons.push({
    icon_url: "books.png",
    app_name: "Book Library",
    app_id: "book_library",
    notifications: 0
  });

  icons.push({
    icon_url: "filemanager.png",
    app_name: "File Manager",
    app_id: "file_manager",
    notifications: 0
  });

  icons.push({
    icon_url: "advancedsettings.png",
    app_name: "Settings",
    app_name: "settings",
    notifications: 0
  });


  res.send(icons);
});
