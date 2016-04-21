import { inject } from 'aurelia-framework';
import { EventAggregator } from 'aurelia-event-aggregator';

@inject(EventAggregator)
export class LogPublisher {
  constructor(eventQueue) {
    this.eventQueue = eventQueue;
  }

  log(logEntry) {
    this.eventQueue.publish('event-log', logEntry);
  }
}

export function configure(config) {
  config.singleton(LogPublisher);
}
