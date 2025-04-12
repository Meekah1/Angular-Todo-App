import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  template: `
    <div class="todo-item" [class.completed]="todo.completed">
      <input
        type="checkbox"
        [checked]="todo.completed"
        (change)="toggle.emit()"
      />
      <span>{{ todo.title }}</span>
      <button (click)="delete.emit()">Delete</button>
    </div>
  `,
  styles: [
    `
      .todo-item {
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 8px;
        border-bottom: 1px solid #eee;
      }
      .completed {
        text-decoration: line-through;
        opacity: 0.7;
      }
      button {
        margin-left: auto;
        background: #ff4444;
        color: white;
        border: none;
        padding: 4px 8px;
        border-radius: 4px;
        cursor: pointer;
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();
}
