import { Component } from '@angular/core';
import {Profile} from './decorators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(){

  }

  run(){

  }

  @Profile()
  long() {
    const before = performance.now();
    while(true){
      if(performance.now() - before > 1500){
        break;
      }
    }
  }
}
