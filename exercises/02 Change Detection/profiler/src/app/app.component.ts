import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noop() {
  }

  longOperation() {
    const before = new Date();
    while(true) {
      const after = new Date();

      if(after.valueOf() - before.valueOf() > 3000) {
        break;
      }
    }
  }
}
