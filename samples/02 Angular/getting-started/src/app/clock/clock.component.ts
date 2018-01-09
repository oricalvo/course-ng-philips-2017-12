import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time: Date;
  @Input() format: string = undefined;

  constructor() {
    this.time = new Date();

    setInterval(()=> {
      this.time = new Date();
    }, 1000);
  }

  ngOnInit() {
  }

  get formatOrDefault() {
    return this.format || "HH:mm:ss";
  }

}
