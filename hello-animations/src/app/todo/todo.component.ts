import { Component, OnInit } from '@angular/core';
import { trigger, state, transition,  style, animate } from '@angular/animations';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ backgroundColor: 'green', opacity: 0}),
        animate(5000, style({ backgroundColor: 'white', opacity: 1 }))
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
