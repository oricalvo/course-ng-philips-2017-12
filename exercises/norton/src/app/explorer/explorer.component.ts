import {Component, Input, OnInit} from '@angular/core';
import {ExplorerState} from '../state/app.store';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.component.html',
  styleUrls: ['./explorer.component.css']
})
export class ExplorerComponent implements OnInit {
  @Input() explorer: ExplorerState;
  @Input() isActive: boolean;

  constructor() { }

  ngOnInit() {
  }

}
