import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MiniProfilerComponent } from './mini-profiler/mini-profiler.component';
import { RoundPipe } from './round.pipe';
import {myGlobal} from './counters';


@NgModule({
  declarations: [
    AppComponent,
    MiniProfilerComponent,
    RoundPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
  }
}

