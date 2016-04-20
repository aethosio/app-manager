/*
  This is the view model for our root application view
  This view model defines variables for the outer shell of
  the application and provides routes for populating and navigating
  between child pages rendered in the <router-view> on the
  corresponding view
 */
 import { inject } from 'aurelia-framework';
 import { EventAggregator } from 'aurelia-event-aggregator';

 @inject(EventAggregator)
export class App {
  constructor(eventQueue) {
    this.eventQueue = eventQueue;
  }

  configureRouter(config, router) {
    config.title = "Aethernet";

    config.map([
      { route: ['', 'desktop'], moduleId : './pages/desktop', nav: false,  title:'Desktop'},
      { route: 'settings',  name: 'settings', moduleId: './pages/settings', nav: true, title:'Settings' }
    ]);

    this.router = router;
  }

  attached() {
    setTimeout(() => {
      this.eventQueue.publish('status', 'Ready');
    }, 10*1000);
  }
}
