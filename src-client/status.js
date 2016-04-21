import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class StatusBarPublisher {
  constructor(eventQueue) {
    this.eventQueue = eventQueue;
  }

  setStatus(status) {
    this.eventQueue.publish('status', status);
  }
}

export function configure(config) {
  config.singleton(StatusBarPublisher);
}
