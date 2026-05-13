import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../services/todo.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-add',
  standalone: true,
  imports: [FormsModule, RouterModule],
  template: `
    <div class="add-container">
      <h2>Add New Todo</h2>

      <input [(ngModel)]="title" placeholder="Enter todo..." />

      <button (click)="addTodo()" [disabled]="!title.trim()">Add Todo</button>

      <a routerLink="/">← Back to List</a>
    </div>
  `,
  styles: [
    `
      .add-container {
        display: flex;
        flex-direction: column;
        gap: 15px;
      }

      h2 {
        margin-bottom: 10px;
      }

      input {
        padding: 14px;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        outline: none;
      }

      button {
        padding: 14px;
        border: none;
        border-radius: 10px;
        background: white;
        color: #1e3c72;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
        transition: 0.3s ease;
      }

      button:hover:not(:disabled) {
        transform: translateY(-2px);
      }

      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      a {
        color: white;
        text-decoration: none;
        opacity: 0.9;
      }
    `,
  ],
})
export class TodoAddComponent {
  title = '';

  constructor(
    private todoService: TodoService,
    private router: Router,
  ) {}

  addTodo() {
    this.todoService.addTodo(this.title.trim());
    this.router.navigate(['/']);
  }
}
