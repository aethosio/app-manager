import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import requireDir from 'require-dir';

import ServiceRegistry from 'aethernet-service-registry-client';
import AppContainers from 'aethernet-app-container-client';

var debug = require('debug')('server');

global.aether = { config: require('../aetherconfig.json') };

const app = express();

// Set express up to automatically parse incoming JSON requests
// into the request object
app.use(bodyParser.json());

// Set up static content paths
app.use('/jspm_packages', express.static(`${__dirname}/../jspm_packages`));
app.use('/dist-client', express.static(`${__dirname}/../dist-client`));
app.use('/assets', express.static(`${__dirname}/../assets`));

// TODO Shared assets should probably come from a shared file service.
app.use('/shared', express.static(`${global.aether.config["shared"]}`))

// Any request without a path should render index.html
app.get('/', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../index.html`));
});

// Any request to /config.js should render the root config.js
app.get('/config.js', (req, res) => {
  res.sendFile(path.resolve(`${__dirname}/../config.js`));
});

// Store the app globally for convenience
global.app = app;

// Include and run all files in the ./services folder
requireDir('services');


var registry = new ServiceRegistry(global.aether.config);
var containers = new AppContainers(registry);

// Start the web server
var server = app.listen(aether.config["app-manager"]["port"], () => {
  const host = server.address().address;
  const port = server.address().port;

  debug(`Server listening at http://${host}:${port}`);
});
