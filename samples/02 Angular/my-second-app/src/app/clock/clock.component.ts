import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {
  time = new Date();

  @Input() format: string;
  @Output() tick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
    console.log("clock.ctor", this.format);
  }

  ngOnInit() {
    console.log("clock.ngOnInit", this.format);

    this.tick.emit();
  }

}
