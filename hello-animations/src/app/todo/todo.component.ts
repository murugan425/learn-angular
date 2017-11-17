import { Component, OnInit } from '@angular/core';
import { trigger, state, transition,  style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fade', [
      state('void', style({ opacity: 0 })),

      transition('void => *', [
        animate(2000)
      ]),
      transition('* => void', [
        animate(1000)
      ])
    ])
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
}
