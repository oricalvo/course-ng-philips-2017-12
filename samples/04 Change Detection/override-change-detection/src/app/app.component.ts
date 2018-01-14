import {Component, ElementRef, NgZone, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  contacts;
  @ViewChild("map") map: ElementRef;

  constructor(private zone: NgZone) {
    const data = [
      {"id": 1, "name": "Ori"},
      {"id": 2, "name": "Roni"},
      {"id": 3, "name": "Udi"},
      {"id": 4, "name": "Tommy"},
    ];

    this.contacts = [];

    for(let i=0; i<2500; i++) {
      for(let j=0; j<data.length; j++) {
        this.contacts.push(data[j]);
      }
    }
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      thirdPartyLibrary_init(this.map.nativeElement);
    });
  }

  noop() {
  }
}

function thirdPartyLibrary_init(domElement) {
  console.log("Register to movemove");
  domElement.addEventListener("mousemove", function() {
    console.log("mousemove");
  });
}
