import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  counter = 0;
  time: Date;

  constructor() {
    this.time = new Date();

    // if(typeof document != "undefined") {
    //   console.log("time", document.querySelector(".time").innerText);
    // }

    console.log(this.time);
  }

  ngOnInit() {
  }

  inc() {
    ++this.counter;
  }
}
