import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';

class IconHandler {

  enter(event) {
    console.log("Enter");
    console.log(event);
  }

  move(event) {
    const scale = 15;
    const sd2 = scale / 2;
    let x = sd2 - (event.layerX / event.target.offsetWidth) * scale;
    let y = sd2 - (event.layerY / event.target.offsetHeight) * scale;
    const shadow = x + "px " + y + "px 10px #888888";
    event.target.setAttribute("style", "-webkit-filter:drop-shadow(" + shadow + ")");
    event.target.style.filter = "drop-shadow(" + shadow + ")";
  }

  leave(event) {
    console.log("Leave");
    console.log(event);
    event.target.setAttribute("style", "-webkit-filter:");
    event.target.style.filter = "";
  }
}

@inject(HttpClient)
export class Desktop {
  constructor(http) {
    this.icon = new IconHandler();
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

  launchApp(event, appName) {
    console.log("Launching app");
    console.log(event);
    console.log(appName);
    console.log(event.target);
    console.log(event.target.parentNode);
  }

}
