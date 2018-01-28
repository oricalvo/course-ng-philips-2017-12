import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact, ContactService} from '../contact.service';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute.snapshot.params);
  }

  ngOnInit() {
    const contactId = this.activatedRoute.snapshot.params.id;
    this.contact = this.contactService.getById(contactId);
  }

  remove() {
    this.contactService.remove(this.contact);
  }
}
