import { transition, trigger, query, style, animate, animateChild, group, stagger } from '@angular/animations';
import { fade, slide, bounceOutLeft, fadeWithParams } from './../animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('todosAnimation', [
      transition(':enter', [
        group([
          query('h1', [
            style({ transform: 'translateY(-20px)' }),
            animate('1s')
          ]),
          query('@bounceOutLeft',
            stagger('1s', animateChild()))
        ])
      ])
    ]),
    fade,
    slide,
    bounceOutLeft,
    fadeWithParams
  ]
})
export class TodoComponent implements OnInit {

  items: any[] = [
    'Wash the dishes',
    'Call the accountant',
    'Apply for a car insurance'];

  constructor() { }

  ngOnInit() {
  }

  addItem(input: HTMLInputElement) {
    this.items.splice(0, 0, input.value);
    input.value = '';
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }

  animationStarted($event) { console.log($event); }

  animationDone($event) { console.log($event); }
}
