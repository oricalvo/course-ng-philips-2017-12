import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent {
  name: string;

  constructor(private contactService: ContactService) { }

  add() {
    this.contactService.add(this.name);
  }
}
