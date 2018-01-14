import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Ori";
  contacts;
  showMoreDetails = false;
  userName = "oric";
  myFormat = "bbb";
  contact = null;

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori", important: true},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];

    setTimeout(()=> {
      this.contact = {name: "Roni"};
    }, 2000);
  }

  change() {
    this.name = "XXX";
    this.showMoreDetails = !this.showMoreDetails;
    this.userName = "yyy";
  }

  log() {
    console.log("userName", this.userName);
  }

  onClockTick() {
    console.log("tick");
  }

  getContactName() {
    return "hhh";
  }
}

