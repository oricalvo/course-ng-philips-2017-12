import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-text-box',
  templateUrl: './text-box.component.html',
  styleUrls: ['./text-box.component.css']
})
export class TextBoxComponent implements OnInit {
  @Input() text: string;
  @Output() textChange: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onTextChanged(value) {
    console.log("onTextChanged", value);

    this.textChange.emit(value);
  }

  log() {
    console.log("text", this.text);
  }
}
