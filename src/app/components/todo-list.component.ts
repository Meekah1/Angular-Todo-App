import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from '../services/todo.service';
import { TodoItemComponent } from './todo-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent, RouterModule],
  template: `
    <div class="header">
      <h2>My Todos</h2>

      <a routerLink="/add" class="add-btn">+ Add Todo</a>
    </div>

    <div *ngIf="todos.length === 0" class="empty-state">No todos yet 🚀</div>

    <div *ngFor="let todo of todos" class="todo-container">
      <app-todo-item
        [todo]="todo"
        (delete)="handleDelete(todo.id)"
        (toggle)="handleToggle(todo.id)"
      ></app-todo-item>
    </div>
  `,
  styles: [
    `
      .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
      }

      h2 {
        margin: 0;
      }

      .todo-container {
        margin-bottom: 15px;
      }

      .empty-state {
        text-align: center;
        padding: 30px;
        opacity: 0.8;
      }

      .add-btn {
        background: white;
        color: #1e3c72;
        padding: 10px 18px;
        border-radius: 10px;
        text-decoration: none;
        font-weight: 600;
        transition: 0.3s ease;
      }

      .add-btn:hover {
        transform: translateY(-2px);
        background: #f0f0f0;
      }
    `,
  ],
})
export class TodoListComponent {
  todos: any[] = [];

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  handleDelete(id: number) {
    this.todos = this.todoService.deleteTodo(id);
  }

  handleToggle(id: number) {
    this.todos = this.todoService.toggleTodo(id);
  }
}
