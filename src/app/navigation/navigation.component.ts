import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  styleUrls: ['./navigation.component.scss'],
  template: `
    <!-- HEADER SECTION -->
    <nav class="nav-list">
      <a class="nav-item" routerLink="/">Home</a>
      <a class="nav-item" routerLink="/Table">Table</a>
    </nav>
  `,
})
export class NavigationComponent {}
