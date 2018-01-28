import { Component, OnInit } from '@angular/core';
import {Contact, ContactService} from '../contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private contactService: ContactService, private router: Router) {
    console.log("ctor");
  }

  ngOnInit() {
  }

  get contacts() {
    return this.contactService.contacts;
  }

  remove(contact: Contact) {
    this.router.navigate(["delete", contact.id , {id: "abc"}]);
  }
}
