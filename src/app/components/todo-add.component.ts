import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h2>Add New Todo</h2>
    <input [(ngModel)]="title" placeholder="Enter todo" />
    <button (click)="addTodo()" [disabled]="!title.trim()">Add</button>
    <a routerLink="/">Back to List</a>
  `,
  styles: [
    `
      input {
        padding: 8px;
        margin-right: 8px;
      }
      button {
        padding: 8px 16px;
      }
      a {
        display: block;
        margin-top: 10px;
      }
    `,
  ],
})
export class TodoAddComponent {
  title = '';

  constructor(private todoService: TodoService, private router: Router) {}

  addTodo() {
    this.todoService.addTodo(this.title.trim());
    this.router.navigate(['/']);
  }
}
