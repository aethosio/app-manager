import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class StatusBar {
  constructor(eventQueue) {
    this.eventQueue = eventQueue;
    this.status = "Booting...";
  }

  attached() {
    this.subscription = this.eventQueue.subscribe('status', status => {
      this.status = status;
    });
  }

  detached() {
    this.subscription.dispose();
  }
}
