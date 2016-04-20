import { LogManager } from 'aurelia-framework';
import { ConsoleAppender } from 'aurelia-logging-console';

// Set up log manager defaults
LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

// Setup aurelia configuration
export function configure (aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging();

  // Start aurelia by mounting app.js/app.html as the root
  aurelia.start().then(() => aurelia.setRoot());
}
