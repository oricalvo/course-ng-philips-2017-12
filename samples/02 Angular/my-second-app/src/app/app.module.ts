import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ClockComponent } from './clock/clock.component';
import { MypipePipe } from './pipes/mypipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    MypipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
