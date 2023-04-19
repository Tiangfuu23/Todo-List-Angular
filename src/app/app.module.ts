import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule, Router } from '@angular/router';
// SERVICES IMPORTATION
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
import { DateService } from './services/date.service';
// Component Importation
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TableComponent } from './table/table.component';

// routing
const AppRoute: Routes = [
  {
    path: '',
    component: ListManagerComponent,
  },
  {
    path: 'Table',
    component: TableComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
    NavigationComponent,
    TableComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(AppRoute)],
  providers: [TodoListService, StorageService, DateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
