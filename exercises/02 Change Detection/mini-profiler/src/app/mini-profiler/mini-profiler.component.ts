import {ApplicationRef, ChangeDetectorRef, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mini-profiler',
  templateUrl: './mini-profiler.component.html',
  styleUrls: ['./mini-profiler.component.css']
})
export class MiniProfilerComponent implements OnInit {
  counters: Counter[];
  counterLastActivity: Counter;

  constructor(appRef: ApplicationRef, private cdr: ChangeDetectorRef) {
    const me = this;
    window["miniProfiler"] = this; // very ugly

    //this.cdr.detach();

    const counterLatestChangeDetection = {
      name: "Latest",
      value: 0,
    };

    const counterAvgChangeDetection = {
      name: "Avg",
      value: 0,
      total: 0,
    };

    const counterChangeDetections = {
      name: "Count",
      value: 0,
    };

    this.counterLastActivity = {
      name: "Last Activity",
      value: 0,
    };

    this.counters = [
      counterLatestChangeDetection,
      counterAvgChangeDetection,
      counterChangeDetections,
      //this.counterLastActivity,
    ];

    const originalTick = appRef.tick;

    appRef.tick = function(){
      console.log("123");
      counterChangeDetections.value++;

      const before = performance.now();
      originalTick.apply(this, arguments);
      const after = performance.now();
      const perf = after - before;

      console.log(perf);
      counterLatestChangeDetection.value = perf;
      counterAvgChangeDetection.total += perf;
      counterAvgChangeDetection.value = (counterAvgChangeDetection.total / counterChangeDetections.value);

      //me.cdr.detectChanges();
    }
  }

  ngOnInit() {
  }

}

interface Counter {
  name: string;
  value: number;
  total?: number;
}
