import { Component } from '@angular/core';
import {appStore} from './app.store';
import {dec, inc} from './actions/counter.actions';
import {ContactActions} from './actions/contact.actions';
import {AppState} from './state/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private contactActions: ContactActions) {
  }

  get state(): AppState {
    return appStore.getState();
  }

  inc() {
    appStore.dispatch(inc(5));
  }

  dec() {
    appStore.dispatch(dec());
  }

  loadContacts() {
    appStore.dispatch(this.contactActions.loadContacts());
  }
}
