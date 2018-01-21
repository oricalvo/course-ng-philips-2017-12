import { Component, OnInit } from '@angular/core';
import {appStore} from '../state/app.store';
import {RootService} from '../state/root.service';

@Component({
  selector: 'app-statusbar',
  templateUrl: './statusbar.component.html',
  styleUrls: ['./statusbar.component.css']
})
export class StatusbarComponent implements OnInit {

  constructor(private rootService: RootService) { }

  ngOnInit() {
  }

  get state() {
    return appStore;
  }

  clear() {
    this.rootService.clearError();
    return false;
  }
}
