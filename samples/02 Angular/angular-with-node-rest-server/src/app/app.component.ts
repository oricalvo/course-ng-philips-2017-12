import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
    this.reloadData();
  }

  async reloadData() {
    const contacts = await this.httpClient.get("/api/contact").toPromise();
    console.log(contacts);
  }
}
