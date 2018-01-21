import { Injectable } from '@angular/core';
import {appStore} from './app.store';

@Injectable()
export class ContactService {
  constructor() {
    console.log("ctor");
  }

  load() {
    if (appStore.all) {
      return;
    }

    setTimeout(() => {
      appStore.all = [
        {"id": 1, "name": "Ori"},
        {"id": 2, "name": "Roni"},
        {"id": 3, "name": "Udi"},
        {"id": 4, "name": "Tommy"},
      ];

      this.recalcFilteredContacts();
    }, 500);
  }

  reload() {
    console.log("Reloading data");

    appStore.all = [
      {"id": 1, "name": "OriX"},
      {"id": 2, "name": "RoniX"},
      {"id": 3, "name": "UdiX"},
      {"id": 4, "name": "TommyX"},
    ];

    this.recalcFilteredContacts();
  }

  add(name: string) {
      if(!name) {
        return;
      }

      const contact = {
        id: -1,
        name: name,
      };

      appStore.all.push(contact);
      this.recalcFilteredContacts();
  }

  filter(searchStr: string) {
    appStore.searchStr = searchStr;

    this.recalcFilteredContacts();
  }

  private recalcFilteredContacts() {
    appStore.contacts = !appStore.all ? null : appStore.all.filter(c => {
      if(!appStore.searchStr) {
        return true;
      }

      return c.name.indexOf(appStore.searchStr)!=-1;
    });
  }
}

