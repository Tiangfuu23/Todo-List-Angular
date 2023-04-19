import { Component } from '@angular/core';
import { DateService } from '../services/date.service';
import { TodoItem } from '../interfaces/todo-item';
@Component({
  selector: 'app-table',
  styleUrls: ['./table.component.scss'],
  template: `
    <table class="table-container">
      <thead>
        <tr>
          <th>Title</th>
          <th>Creation Time</th>
          <th>Completion Time</th>
          <th>Deletion Time</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <td>Todo 1</td>
          <td>Todo 2</td>
          <td>Todo 3</td>
          <td>Todo 4</td>
        </tr> -->
        <tr *ngFor="let infor of dataSource">
          <td [innerHTML]="infor.title"></td>
          <td [innerHTML]="infor.creationTime"></td>
          <td [innerHTML]="infor.completionTime"></td>
          <td [innerHTML]="infor.deletionTime"></td>
        </tr>
      </tbody>
    </table>
  `,
})
export class TableComponent {
  dataSource: TodoItem[];
  constructor(private date: DateService) {
    this.dataSource = this.date.getDateStorage();
  }
}
