import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

@inject(HttpClient)
export class Desktop {
  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('http://localhost:3000/api/desktop/');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('icons')
      .then(response => response.json())
      .then(icons => this.icons = icons);
  }
}
