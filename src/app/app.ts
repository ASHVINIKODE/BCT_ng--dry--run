import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./components/header/header";
import { Home } from "./home/home";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Home],
   template: `
  <h1>Welcome to {{ title() }}!</h1>
  <p>hello from new page</p>
  <app-header/>
  <app-home/>
  <router-outlet/>
  ` ,

styles: [],
})

export class App {
  protected readonly title = signal('BCT_ng--dry--run');
}
