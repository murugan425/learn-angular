import { IAppState } from './../app.store';
import { Component, OnInit } from '@angular/core';
import { NgRedux, NgReduxModule, select } from '@angular-redux/store';
import { TODOACTIONS } from './../app.action';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent implements OnInit {
  @select(s => s.todoTasks.todos) todos;
  @select(s => s.todoTasks.lastUpdate) lastUpdate;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  ngOnInit() {
  }

  clearTodos() {
    this.ngRedux.dispatch({type: TODOACTIONS.REMOVE_ALL_TODOS});
  }
}
