import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'app-todo-item',
  styleUrls: ['./todo-item.component.scss'],
  template: `
    <div class="todo-item">
      <input
        type="checkbox"
        class="todo-checkbox"
        (click)="completeItem()"
        [checked]="item.completed"
      />
      <span class="todo-title" [ngClass]="{ 'todo-complete': item.completed }">
        {{ item.title }}
      </span>
      <button class="btn btn-red" (click)="removeItem()">remove</button>
    </div>
  `,
})
export class TodoItemComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  @Input() item: TodoItem;
  // emit event that removed item to list manager comp
  @Output() remove: EventEmitter<TodoItem> = new EventEmitter<TodoItem>();
  removeItem(): void {
    this.remove.emit(this.item);
  }
  // emit event that updated status of item
  @Output() update: EventEmitter<any> = new EventEmitter<any>();
  completeItem(): void {
    this.update.emit({
      item: this.item,
      changes: { completed: !this.item.completed },
    });
  }
}
