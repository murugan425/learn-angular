import { COUNTERACTIONS } from './../app.action';
import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { IAppState } from '../app.store';

@Component({
  selector: 'app-counter-board',
  templateUrl: './counter-board.component.html',
  styleUrls: ['./counter-board.component.css']
})
export class CounterBoardComponent implements OnInit {
  @select(s => s.counter.count) count: number;

  constructor(private ngRedux: NgRedux<IAppState>) {
  }

  ngOnInit() {
  }

  increment() {
    this.ngRedux.dispatch({type: COUNTERACTIONS.INCREMENT});
  }

  decrement() {
    this.ngRedux.dispatch({type: COUNTERACTIONS.DECREMENT});
  }
}
