import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { outputAst } from '@angular/compiler';
@Component({
  selector: 'app-todo-item',
  styleUrls: ['./todo-item.component.scss'],
  template: `
    <div class="todo-item">
      {{ item.title }}
    </div>
    <button class="btn btn-red" (click)="removeItem()">remove</button>
  `,
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() item: TodoItem;
  // emit removed item to list manager comp
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  removeItem(): void {
    this.remove.emit(this.item);
  }
}
