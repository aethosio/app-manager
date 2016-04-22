/*
  This is the view model for our root application view
  This view model defines variables for the outer shell of
  the application and provides routes for populating and navigating
  between child pages rendered in the <router-view> on the
  corresponding view
 */
import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';
import { StatusBarPublisher } from 'status';
import { LogPublisher } from 'logger';

@inject(EventAggregator, StatusBarPublisher, LogPublisher)
export class App {
  constructor(eventQueue, statusBar, logger) {
    this.eventQueue = eventQueue;
    this.statusBar = statusBar;
    this.logger = logger;
  }

  configureRouter(config, router) {
    config.title = "AethOS Desktop";

    config.map([
      { route: ['', 'desktop'], moduleId : './pages/desktop', nav: false,  title:'Desktop'},
      { route: 'settings',  name: 'settings', moduleId: './pages/settings', nav: true, title:'Settings' }

    ]);

    this.router = router;
  }

  attached() {
    setTimeout(() => {
      this.statusBar.setStatus('Ready');
      this.logger.log('AethOS finished booting and ready for user interaction.');
    }, 10*1000);

    this.logger.log('Booting...');
  }
}
