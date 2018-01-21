import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

// function classDeco() {
//   return function(target) {
//     console.log("Decorating ", target);
//   }
// }
//
// function methodDeco() {
//   return function(target, desc) {
//     console.log("Decorating ", target);
//   }
// }

export abstract class IContactService {
  abstract getAll(): Promise<Contact[]>;
}

@Injectable()
// @classDeco()
export class ContactService implements IContactService {
  contacts: Contact[];

  constructor(http: HttpClient) {
    this.contacts = null;
  }

  // @methodDeco()
  getAll(): Promise<Contact[]> {
    return new Promise((resolve, reject)=> {
      if(this.contacts) {
        resolve(this.contacts);
        return;
      }

      setTimeout(()=> {
        this.contacts = [
          {"id": 1, "name": "Ori"},
          {"id": 2, "name": "Roni"},
          {"id": 3, "name": "Udi"},
          {"id": 4, "name": "Tommy"},
        ];

        resolve(this.contacts);
      }, 2500);
    });
  }
}

export interface Contact {
  id: number;
  name: string;
}

