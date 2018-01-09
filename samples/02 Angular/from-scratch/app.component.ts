import {Component} from "@angular/core";

@Component({
    selector: "app-root",
    template: `
        <h1>{{title}}</h1>
        <button (click)='run()'>Click me</button>
    `,
})
export class AppComponent {
    title: string = "Hello Angular";
    run() {
        this.title = "XXX";
    }
}
