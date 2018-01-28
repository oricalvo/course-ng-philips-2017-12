import {Contact} from '../state/app.state';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class ContactActions {
  constructor(private http: HttpClient) {
  }

  setContacts(contacts: Contact[]) {
    return {
      type: "SET_CONTACTS",
      contacts: contacts,
    };
  }

  beginLoading() {
    return {
      type: "BEGIN_LOADING",
    };
  }

  endLoading() {
    return {
      type: "END_LOADING",
    };
  }

  loadContacts() {
    return (dispatch, getState) => {
      dispatch(this.beginLoading());

      setTimeout(() => {
        dispatch(this.setContacts([
          {"id": 1, "name": "Ori"},
          {"id": 2, "name": "Roni"},
          {"id": 3, "name": "Udi"},
          {"id": 4, "name": "Tommy"},
        ]));

        dispatch(this.endLoading());
      }, 2500);
    }
  }
}
