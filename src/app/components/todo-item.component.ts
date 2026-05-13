import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  template: `
    <div class="todo-item" [class.completed]="todo.completed">
      <div class="left-section">
        <input
          type="checkbox"
          [checked]="todo.completed"
          (change)="toggle.emit()"
        />

        <span>{{ todo.title }}</span>
      </div>

      <button (click)="delete.emit()">Delete</button>
    </div>
  `,
  styles: [
    `
      .todo-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: rgba(255, 255, 255, 0.15);
        padding: 15px;
        border-radius: 12px;
        backdrop-filter: blur(10px);
        transition: 0.3s ease;
      }

      .todo-item:hover {
        transform: translateY(-2px);
      }

      .left-section {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      input[type='checkbox'] {
        width: 18px;
        height: 18px;
        cursor: pointer;
      }

      span {
        font-size: 16px;
      }

      .completed span {
        text-decoration: line-through;
        opacity: 0.6;
      }

      button {
        border: none;
        background: #ff4d4d;
        color: white;
        padding: 8px 14px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.3s ease;
      }

      button:hover {
        background: #ff1f1f;
      }
    `,
  ],
})
export class TodoItemComponent {
  @Input() todo!: Todo;
  @Output() delete = new EventEmitter<void>();
  @Output() toggle = new EventEmitter<void>();
}
