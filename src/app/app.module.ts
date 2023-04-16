import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputButtonUnitComponent } from './input-button-unit/input-button-unit.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { ListManagerComponent } from './list-manager/list-manager.component';
// SERVICES IMPORTATION
import { TodoListService } from './services/todo-list.service';
import { StorageService } from './services/storage.service';
@NgModule({
  declarations: [
    AppComponent,
    InputButtonUnitComponent,
    TodoItemComponent,
    ListManagerComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [TodoListService, StorageService],
  bootstrap: [AppComponent],
})
export class AppModule {}
