import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Contact} from '../home/home.component';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  contact: Contact;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ContactService) {
  }

  async ngOnInit() {
    const contactId = this.activatedRoute.snapshot.params.id;

    this.contact = await this.contactService.loadContact(contactId);
  }

}
