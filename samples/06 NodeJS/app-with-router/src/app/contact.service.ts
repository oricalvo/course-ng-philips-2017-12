import { Injectable } from '@angular/core';
import {Contact} from './home/home.component';

@Injectable()
export class ContactService {
  contacts: Contact[];

  constructor() {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];
  }

  async loadContact(contactId: any) {
    const index = this.contacts.findIndex(c => c.id == contactId);
    if(index == -1) {
      throw new Error("Contact " + contactId + " was not found");
    }

    return this.contacts[index];
  }
}

export interface Contact {
  id: number;
  name: string;
}
