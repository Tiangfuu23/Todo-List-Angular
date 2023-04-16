import { Component, OnInit, Input } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'app-todo-item',
  styleUrls: ['./todo-item.component.scss'],
  template: `
    <div class="todo-item">
      {{ item.title }}
    </div>
  `,
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() item: TodoItem;
}
