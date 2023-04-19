import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
import { DateService } from './date.service';
const todoListStorageKey = 'Todo_List';

// const defaultTodoList: TodoItem[] = [
//   { title: 'install NodeJs' },
//   { title: 'install Angular CLI' },
//   { title: 'create new App' },
//   { title: 'serve app' },
//   { title: 'develop app ' },
//   { title: 'deploy app' },
// ];

// const defaultTodoList: TodoItem[] = [];

@Injectable({
  providedIn: 'root',
})
export class TodoListService {
  private todoList: TodoItem[];
  private existString: any;
  constructor(
    private storageService: StorageService,
    private date: DateService
  ) {
    const localTodoList = storageService.getData(todoListStorageKey);
    // if (Object.keys(localTodoList).length === 0) {
    //   // localTodoList is an empty Object
    //   this.todoList = defaultTodoList;
    // } else {
    //   this.todoList = localTodoList;
    // }
    // same as
    this.todoList =
      Object.keys(localTodoList).length === 0 ? [] : localTodoList;
    /***** // Maintain a set that handle duplicated string
     *******/
    this.existString = new Set(
      Array.from(this.todoList, (ele) => {
        return ele.title;
      })
    );
    // console.log(this.existString);
  }
  private saveList(): void {
    this.storageService.setData(todoListStorageKey, this.todoList);
  }
  // private updateDateInfor(
  //   item: TodoItem,
  //   creationTime: string | undefined,
  //   deletionTime: string | undefined,
  //   completionTime: string | undefined
  // ): void {
  //   [item.creationTime, item.creationTime, item.deletionTime] = [
  //     creationTime,
  //     completionTime,
  //     deletionTime,
  //   ];
  // }
  private checkValid(item: TodoItem): boolean {
    // if new item has an emptry string or it was existed in todoList -> return false
    if (item.title === '' || this.existString.has(item?.title || ''))
      return false;
    return true;
  }
  getTodoList(): TodoItem[] {
    // console.log(this.todoList, typeof this.todoList);
    // return todoList (share Data)
    return this.todoList;
  }
  addItem(item: TodoItem): void {
    // console.log(this.todoList, typeof this.todoList);
    // push item to todoList
    if (this.checkValid(item)) {
      this.todoList.push(item);
      this.date.addDateInfor(item);
      this.saveList();
      this.existString.add(item.title);
    } else {
      console.log(
        'Item has empty title string or it was existed in to do list'
      );
    }
  }
  updateItem(item: TodoItem, changes: TodoItem): void {
    const index = this.todoList.indexOf(item);
    // merge two objects
    this.todoList[index] = { ...item, ...changes };
    // console.log(this.todoList[index]);
    this.date.updateDateInfor(item, this.todoList[index]);
    this.saveList();
  }
  deleteItem(item: TodoItem) {
    // update deletion time property
    item.deletionTime = this.date.getTime();
    //
    const index = this.todoList.indexOf(item);
    this.todoList.splice(index, 1);
    this.saveList();
    this.existString.delete(item.title);
  }
}
