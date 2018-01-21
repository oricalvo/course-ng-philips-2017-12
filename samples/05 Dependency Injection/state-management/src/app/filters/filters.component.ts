import { Component, OnInit } from '@angular/core';
import {ContactService} from '../contact.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  searchStr: string;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  apply() {
    this.contactService.filter(this.searchStr);
  }
}
