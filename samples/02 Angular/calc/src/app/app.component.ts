import {Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  num1: string;
  num2: string;
  result: number;
  @ViewChild("inputNum1") inputNum1: ElementRef;

  calc() {
    this.result = parseFloat(this.num1) + parseFloat(this.num2);
  }

  reset () {
    this.num1 = "";
    this.num2 = "";
    this.result = undefined;

    this.inputNum1.nativeElement.focus();
  }
}
