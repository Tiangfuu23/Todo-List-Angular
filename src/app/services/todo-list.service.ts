import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';

const todoListStorageKey = 'Todo_List';

const defaultTodoList: TodoItem[] = [
  { title: 'install NodeJs' },
  { title: 'install Angular CLI' },
  { title: 'create new App' },
  { title: 'serve app' },
  { title: 'develop app ' },
  { title: 'deploy app' },
];
@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[];
  constructor(private storageService: StorageService) {
    const localTodoList = storageService.getData(todoListStorageKey);
    if (Object.keys(localTodoList).length === 0) {
      // localTodoList is an empty Object
      this.todoList = defaultTodoList;
    } else {
      this.todoList = localTodoList;
    }
    // console.log(storageService.getData(todoListStorageKey));
    // console.log(this.todoList);
    // console.log({} ?? '1');
  }
  private saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  getTodoList(): TodoItem[] {
    console.log(this.todoList, typeof this.todoList);
    // return todoList (share Data)
    return this.todoList;
  }
  addItem(item: TodoItem): void {
    console.log(this.todoList, typeof this.todoList);
    // push item to todoList
    this.todoList.push(item);
    this.saveList();
  }
  updateItem(item: TodoItem, changes: TodoItem): void {
    const index = this.todoList.indexOf(item);
    // merge two objects
    this.todoList[index] = { ...item, ...changes };
    this.saveList();
  }
  deleteItem(item: TodoItem) {
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
  }
}
