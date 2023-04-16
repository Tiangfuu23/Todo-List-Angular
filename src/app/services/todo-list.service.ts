import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[] = [
    { title: 'install NodeJs' },
    { title: 'install Angular CLI' },
    { title: 'create new App' },
    { title: 'serve app' },
    { title: 'develop app ' },
    { title: 'deploy app' },
  ];
  constructor() {}
  getTodoList(): TodoItem[] {
    return this.todoList;
  }
  addItem(item: TodoItem): void {
    this.todoList.push(item);
  }
}
