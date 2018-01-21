import { Injectable } from '@angular/core';
import {RootService} from '../state/root.service';
import {appStore} from '../state/app.store';

const KEY_DOWN = 40;
const KEY_UP = 38;
const KEY_TAB = 9;
const KEY_ENTER = 13;

@Injectable()
export class KeyboardManager {

  constructor(private rootService: RootService) { }

  init() {
    document.addEventListener("keydown", event => {
      console.log("keydown", event.which);

      if(event.which == KEY_DOWN) {
        this.onKeyDown();
      }
      else if(event.which == KEY_UP) {
        this.onKeyUp();
      }
      else if(event.which == KEY_TAB) {
        this.onKeyTab();

        event.preventDefault();
      }
      else if(event.which == KEY_ENTER) {
        this.onKeyEnter();
      }
    });
  }

  private onKeyDown() {
    this.rootService.moveDown();
  }

  private onKeyUp() {
    this.rootService.moveUp();
  }

  private onKeyTab() {
    this.rootService.switch();
  }

  private onKeyEnter() {
    this.rootService.activate();
  }
}
