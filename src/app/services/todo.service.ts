import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly STORAGE_KEY = 'todos';

  getTodos(): Todo[] {
    const todos = localStorage.getItem(this.STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
  }

  private saveTodos(todos: Todo[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(todos));
  }

  addTodo(title: string): Todo[] {
    const todos = this.getTodos();
    const newTodo: Todo = {
      id: Date.now(),
      title,
      completed: false,
    };
    const updatedTodos = [...todos, newTodo];
    this.saveTodos(updatedTodos);
    return updatedTodos;
  }

  deleteTodo(id: number): Todo[] {
    const todos = this.getTodos().filter((todo) => todo.id !== id);
    this.saveTodos(todos);
    return todos;
  }

  toggleTodo(id: number): Todo[] {
    const todos = this.getTodos().map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.saveTodos(todos);
    return todos;
  }
}
