import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class ContactService {
  contacts: Contact[];

  constructor(private router: Router) {
    this.contacts = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ]
  }

  getById(contactId: any) {
    return this.contacts.find(c => c.id == contactId);
  }

  remove(contact: Contact) {
    const index = this.contacts.findIndex(c => c == contact);
    if(index == -1) {
      throw new Error("Contact " + contact.id + " was not found");
    }

    this.contacts.splice(index, 1);

    this.router.navigate([""]);
  }
}

export interface Contact {
  id: number;
  name: string;
}

