import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {ContactService} from './contact.service';
import {HttpClientModule} from '@angular/common/http';
import { FiltersComponent } from './filters/filters.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactNewComponent } from './contact-new/contact-new.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FiltersComponent,
    ContactListComponent,
    ContactNewComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    ContactService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(contactService: ContactService) {
    contactService.load();
  }
}
