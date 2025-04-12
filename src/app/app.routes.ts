import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list.component';
import { TodoAddComponent } from './components/todo-add.component';

export const routes: Routes = [
  { path: '', component: TodoListComponent },
  { path: 'add', component: TodoAddComponent },
];
