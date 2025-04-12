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
    <h2>My Todos</h2>
    <div *ngIf="todos.length === 0">No todos yet!</div>
    <div *ngFor="let todo of todos" class="todo-container">
      <app-todo-item
        [todo]="todo"
        (delete)="handleDelete(todo.id)"
        (toggle)="handleToggle(todo.id)"
      ></app-todo-item>
    </div>
    <a routerLink="/add" class="add-btn">Add Todo</a>
  `,
  styles: [
    `
      .todo-container {
        margin: 10px 0;
      }
      .add-btn {
        display: inline-block;
        margin-top: 10px;
        padding: 8px 16px;
        background: #1976d2;
        color: white;
        text-decoration: none;
        border-radius: 4px;
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
