import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}
  getData(key: string): any {
    // get data from local storage
    return JSON.parse(localStorage.getItem(key) ?? '{}');
  }
  setData(key: string, data: any): void {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
