import {Component, ElementRef, Inject, NgZone, ViewChild} from '@angular/core';
import {Contact, ContactService, IContactService} from './contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: Contact[];

  constructor(private contactService: IContactService) {
    console.log(contactService);
  }

  async load() {

    this.contacts = await this.contactService.getAll();
  }
}
