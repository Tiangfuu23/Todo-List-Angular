import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <app-navigation></app-navigation>
    <h1 class="app-title">Welcome to {{ title }}!</h1>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'To Do List';
}
