import { Injectable } from '@angular/core';
import {ExplorerState} from '../state/app.store';
import {clone} from '../../common/object.helpers';

@Injectable()
export class FileSystem {
  data: {[path: string]: ExplorerState};

  constructor() {
    this.data = {
      "C:/": {
        path: "C:/",
        items: [
          {name: "Windows", type:"dir", active: true},
          {name: "Program Files", type:"dir"},
          {name: "Data", type:"dir"},
          {name: "1.txt", type:"file"},
          {name: "2.txt", type:"file"},
        ],
        topLevel: true,
        activeIndex: 0,
      },
      "C://Windows": {
        path: "C://Windows",
        items: [
          {name: "..", type: "up", active: true},
          {name: "System32", type: "dir"},
          {name: "Microsoft.NET", type: "dir"},
        ],
        topLevel: false,
        activeIndex: 0,
      },
      "C://Program Files": {
        path: "C://Windows",
        items: [
          {name: "..", type: "up", active: true},
          {name: "WebStorm", type: "dir"},
          {name: "Visual Studio", type: "dir"},
        ],
        topLevel: false,
        activeIndex: 0,
      },
    }
  }

  get(path: string): Promise<ExplorerState> {
    const res = this.data[path];
    if(!res) {
      throw new Error("Path " + path + " was not found");
    }

    return Promise.resolve(clone(res));
  }
}
