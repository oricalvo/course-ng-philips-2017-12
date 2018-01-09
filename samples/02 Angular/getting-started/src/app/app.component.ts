import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter: number = 0;
  contacts: Contact[];
  clockFormat: string;

  constructor() {
    console.log("ctor");

    this.contacts = [
      {id: 1, name: "Ori"},
      {id: 2, name: "Roni"},
      {id: 3, name: "Udi"},
    ];

    this.clockFormat = "ss";
  }

  inc() {
    ++this.counter;
  }

  dec() {
    --this.counter;
  }

  remove(contact: Contact, index: number) {
    if(confirm("Are you sure you want to delete " + contact.name + "?")) {
      this.contacts.splice(index, 1);
    }
  }

  resetFormat() {
    this.clockFormat = undefined;
  }
}

interface Contact {
  id: number;
  name: string;
}
