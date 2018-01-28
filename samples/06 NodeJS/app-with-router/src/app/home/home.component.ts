import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private contactService: ContactService) {
  }

  ngOnInit() {
  }

  get contacts() {
    return this.contactService.contacts;
  }
}
