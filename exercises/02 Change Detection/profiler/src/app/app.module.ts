import { BrowserModule } from '@angular/platform-browser';
import {ApplicationRef, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import { ProfilerComponent } from './profiler/profiler.component';
import {counterChangeDetectionAvg, counterChangeDetectionCount, getProfilerComponent} from './counters';


@NgModule({
  declarations: [
    AppComponent,
    ProfilerComponent
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
    let count = 0;

    appRef.tick = function() {
      ++count;

      const before = performance.now();
      originalTick.apply(this, arguments);
      const after = performance.now();
      const time = after - before;

      console.log(count, time);

      counterChangeDetectionCount.value++;

      counterChangeDetectionAvg.total += time;
      counterChangeDetectionAvg.value = counterChangeDetectionAvg.total / counterChangeDetectionCount.value;

      const profilerComponent = getProfilerComponent();
      if(profilerComponent) {
        profilerComponent.cdr.detectChanges();
      }
    };
  }
}
