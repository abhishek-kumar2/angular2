import {Component} from 'angular2/core';
import {Todo}      from './todo';
import {TodoList}  from './todo_list';
import {TodoForm}  from './todo_form';
@Component({
  selector: 'todo-app',
  template: `
    <h2>Todo</h2>
    <span>{{remaining}} of {{todos.length}} remaining</span>
    [ <a (click)="archive()">archive</a> ]
    <todo-list [todos]="todos"></todo-list>
    <todo-form (newTask)="addTask($event)"></todo-form>`,
  styles:['a { cursor: pointer; cursor: hand; }'],
  directives: [TodoList, TodoForm]
})
export class TodoApp {
  todos: Todo[] = [
      {text: 'Quick-Start Angular2 app using browsersync', done: true},
      {text: 'ToDo List Angular2 app good example of directives', done: true}
  ];
  get remaining() {
    return this.todos.filter(todo => !todo.done).length;
  }
  archive(): void {
    let oldTodos = this.todos;
    this.todos = [];
    oldTodos.forEach(todo => {
      if (!todo.done) { this.todos.push(todo); }
    });
  }
  addTask(task: Todo) {
    this.todos.push(task);
  }
}