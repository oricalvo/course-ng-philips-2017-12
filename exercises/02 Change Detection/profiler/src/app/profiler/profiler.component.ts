import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {counters, registerProfilerComponent} from '../counters';

@Component({
  selector: 'app-profiler',
  templateUrl: './profiler.component.html',
  styleUrls: ['./profiler.component.css']
})
export class ProfilerComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef) {
    this.cdr.detach();

    registerProfilerComponent(this);
  }

  ngOnInit() {
  }

  get counters() {
    return counters;
  }
}

