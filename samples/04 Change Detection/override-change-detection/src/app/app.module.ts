import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(appRef: ApplicationRef) {
    const originalTick = appRef.tick;
    appRef.tick = function() {
      const before = performance.now();
      originalTick.apply(this, arguments);
      const after = performance.now();

      console.log(after-before);
    };
  }
}
