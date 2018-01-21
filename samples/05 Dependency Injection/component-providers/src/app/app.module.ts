import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ContactService, IContactService} from './contact.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [
    ContactService,
    //{provide: IContactService, useClass: ContactService},
    //{provide: IContactService, useClass: ContactServiceEx},
    //{provide: "ContactService", useClass: ContactService2},
    //{provide: ContactService, useValue: "ABC"},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}
