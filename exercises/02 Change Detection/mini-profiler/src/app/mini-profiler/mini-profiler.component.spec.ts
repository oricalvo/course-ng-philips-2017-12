import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniProfilerComponent } from './mini-profiler.component';

describe('MiniProfilerComponent', () => {
  let component: MiniProfilerComponent;
  let fixture: ComponentFixture<MiniProfilerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniProfilerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniProfilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
