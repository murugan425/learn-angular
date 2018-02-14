import { Component, OnInit, Input } from '@angular/core';
import { NgRedux, NgReduxModule, select } from '@angular-redux/store';
import { IAppState } from './../app.store';
import { TODOACTIONS } from './../app.action';
import { ITodo } from '../todo/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @select(s => s.todoTasks.todos) todos;
  todomodel: ITodo = {
    id: 0,
    description: '',
    assigned: '',
    priority: '',
    isCompleted: false
  };

  constructor(private ngRedux: NgRedux<IAppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    this.ngRedux.dispatch({type: TODOACTIONS.ADD_TODO, todo: this.todomodel});
  }

  toggleTodo(todoItem) {
    this.ngRedux.dispatch({type: TODOACTIONS.TOGGLE_TODO, id: todoItem.id});
  }

  removeTodo(todoItem) {
    this.ngRedux.dispatch({type: TODOACTIONS.REMOVE_TODO, id: todoItem.id});
  }
}
