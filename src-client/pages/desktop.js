import {inject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import 'fetch';


@inject(HttpClient)
export class Desktop {
  constructor(http) {
    this.icon = new IconHandler();
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withDefaults({
          headers: { 'Accept' : 'application/json' }
        })
        .withBaseUrl('http://localhost:3000/api');
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('/desktop/icons')
      .then(response => response.json())
      .then(icons => this.icons = icons);
  }

  launchApp(event, app_id) {
    console.log('Launching app: ' + app_id);

    return this.http.fetch('/applications/' + app_id,
        {method: 'post', body:json({ command: "open"}) })
      .then(response => response.json())
      .then(body => console.log(body));
  }
}

/*
 * IconHandler class
 *
 * Handles special effects for desktop icons
 */
class IconHandler {

  enter(event) {
    // Nothing special here
  }

  move(event) {
    // Create a parallax drop shadow
    const scale = 15;
    const sd2 = scale / 2;
    let x = sd2 - (event.layerX / event.target.offsetWidth) * scale;
    let y = 10 + sd2 - (event.layerY / event.target.offsetHeight) * scale;
    const shadow = x + "px " + y + "px 10px #888888";
    event.target.setAttribute("style", "-webkit-filter:drop-shadow(" + shadow + ")");
    event.target.style.filter = "drop-shadow(" + shadow + ")";
  }

  leave(event) {
    // Remove the drop shadow
    event.target.setAttribute("style", "-webkit-filter:");
    event.target.style.filter = "";
  }
}
