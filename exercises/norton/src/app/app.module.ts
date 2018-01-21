import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ExplorerComponent } from './explorer/explorer.component';
import {RootService} from './state/root.service';
import {KeyboardManager} from './keyboard/keyboard-manager.service';
import {FileSystem} from './fileSystem/file-system.service';
import { StatusbarComponent } from './statusbar/statusbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ExplorerComponent,
    StatusbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    RootService,
    KeyboardManager,
    FileSystem,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(rootService: RootService, keyboardManager: KeyboardManager) {
    rootService.load();

    keyboardManager.init();
  }
}
