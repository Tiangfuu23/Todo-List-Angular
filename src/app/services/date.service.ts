import { Injectable } from '@angular/core';
import { TodoItem } from '../interfaces/todo-item';
import { StorageService } from './storage.service';
const dateStorageKey = 'date_storage';

// const defaultStorage: TodoItem[] = [];

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private date: any;
  private dateStorage: TodoItem[];
  constructor(private storageService: StorageService) {
    const localDate = storageService.getData(dateStorageKey);
    // if(Object.keys(localDate).length === 0){
    //   // localDate is an emptyObject
    //   this.dateStorage = [];
    // }else{
    //   this.dateStorage = localDate
    // }
    // same as
    this.dateStorage = Object.keys(localDate).length === 0 ? [] : localDate;
  }
  constructorDate() {
    this.date = new Date();
  }
  getDay(): string {
    this.constructorDate();
    const [day, month, year] = [
      this.date.getDate(),
      this.date.getMonth(),
      this.date.getFullYear(),
    ];
    // console.log(`${day}-${month + 1}-${year}`);
    return `${day}-${month + 1}-${year}`;
  }
  getTime(): string {
    this.constructorDate();
    const [hour, minutes, second] = [
      this.date.getHours(),
      this.date.getMinutes(),
      this.date.getSeconds(),
    ];
    // console.log(`${hour}:${minutes}:${second}`);
    return `Time: ${hour}:${minutes}:${second}
            <pre></pre>
            Day: ${this.getDay()}`;
  }
  // FOR DATE STORAGE
  getDateStorage(): TodoItem[] {
    return this.dateStorage;
  }
  saveDateStorage(): void {
    this.storageService.setData(dateStorageKey, this.dateStorage);
  }
  addDateInfor(item: TodoItem): void {
    // update creation time property
    item.creationTime = this.getTime();
    //
    this.dateStorage.push(item);
    this.saveDateStorage();
    console.log(this.dateStorage);
  }
  updateDateDeletion(item: TodoItem) {
    // update deletion time property
    item.deletionTime = this.getTime();
    //
    this.saveDateStorage();
  }
  updateDateInfor(item: TodoItem, newItem: TodoItem): void {
    const index = this.dateStorage.indexOf(item);
    this.dateStorage[index] = newItem;
    this.dateStorage[index].completionTime = this.dateStorage[index].completed
      ? this.getTime()
      : undefined;
    this.saveDateStorage();
  }
}
