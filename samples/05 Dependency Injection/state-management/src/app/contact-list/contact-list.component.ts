import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';
import {appStore} from '../app.store';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  constructor() {
  }

  get contacts() {
    return appStore.contacts;
  }

}
