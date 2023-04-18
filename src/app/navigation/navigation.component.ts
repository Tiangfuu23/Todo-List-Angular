import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  styleUrls: ['./navigation.component.scss'],
  template: `
    <!-- HEADER SECTION -->
    <nav class="nav-list">
      <a class="nav-item" href="#">Home</a>
      <a class="nav-item" href="#">Table</a>
    </nav>
  `,
})
export class NavigationComponent {}
