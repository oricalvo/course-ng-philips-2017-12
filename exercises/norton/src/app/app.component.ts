import { Component } from '@angular/core';
import {appStore, AppStore} from './state/app.store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  get state(): AppStore {
    return appStore;
  }
}
