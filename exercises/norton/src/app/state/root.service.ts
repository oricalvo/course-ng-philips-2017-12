import { Injectable } from '@angular/core';
import {appStore, ExplorerState} from './app.store';
import {getDirectoryName} from '../../common/path.helpers';
import {FileSystem} from '../fileSystem/file-system.service';

@Injectable()
export class RootService {

  constructor(private fileSystem: FileSystem) { }

  async load() {
    appStore.explorer1 = await this.fileSystem.get("C:/");
    appStore.explorer2 = await this.fileSystem.get("C:/");
    appStore.active = appStore.explorer1;
  }

  moveDown() {
    const explorer = appStore.active;
    if(!explorer) {
      return;
    }

    if(explorer.activeIndex<0 || explorer.activeIndex==explorer.items.length-1) {
      return;
    }

    explorer.items[explorer.activeIndex].active = false;
    explorer.items[++explorer.activeIndex].active = true;
  }

  moveUp() {
    const explorer = appStore.active;
    if(!explorer) {
      return;
    }

    if(explorer.activeIndex<=0) {
      return;
    }

    explorer.items[explorer.activeIndex].active = false;
    explorer.items[--explorer.activeIndex].active = true;
  }

  switch() {
    if(appStore.active == appStore.explorer1) {
      appStore.active = appStore.explorer2;
    }
    else {
      appStore.active = appStore.explorer1;
    }
  }

  activate() {
    const explorer = appStore.active;
    if(!explorer) {
      return;
    }

    const item = explorer.items[explorer.activeIndex];
    if(!item) {
      return;
    }

    if(item.type == "dir") {
      const path = explorer.path + "/" + item.name;
      this.changeDir(path);
    }
    else if(item.type == "up") {
      if(explorer.topLevel) {
        return;
      }

      const path = getDirectoryName(explorer.path);
      this.changeDir(path);
    }
  }

  private async changeDir(path: string) {
    try {
      const explorer = await this.fileSystem.get(path);

      if (appStore.active == appStore.explorer1) {
        appStore.active = appStore.explorer1 = explorer;
      }
      else {
        appStore.active = appStore.explorer2 = explorer;
      }
    }
    catch(err) {
      appStore.error = err.message;
    }
  }

  clearError() {
    appStore.error = null;
  }
}
