import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { TodoListService } from '../services/todo-list.service';
@Component({
  selector: 'app-list-manager',
  styleUrls: ['./list-manager.component.scss'],
  template: `
    <div class="todo-app">
      <app-input-button-unit (submit)="addItem($event)"></app-input-button-unit>
      <ul>
        <li *ngFor="let todoItem of todoList">
          <app-todo-item [item]="todoItem"></app-todo-item>
        </li>
      </ul>
    </div>
  `,
})
export class ListManagerComponent implements OnInit {
  todoList: TodoItem[];
  constructor(private TodoListService: TodoListService) {}
  ngOnInit(): void {
    // todoList reference to todoList in services
    this.todoList = this.TodoListService.getTodoList();
  }
  // push todo-items into todoList
  addItem(title: string): void {
    this.TodoListService.addItem({ title });
  }
}
