import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class LogView {
  constructor(eventQueue) {
    this.eventQueue = eventQueue;
    this.log = [];
    this.log.push('Booting...');
    this.log.push('This is a test entry');
  }

  attached() {
    this.subscription = this.eventQueue.subscribe('event-log', logEntry => {
      this.log.push(logEntry);
      console.log(logEntry);
    });
  }

  detached() {
    this.subscription.dispose();
  }
}
