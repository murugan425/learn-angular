import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamecontainer',
  templateUrl: './gamecontainer.component.html',
  styleUrls: ['./gamecontainer.component.scss']
})
export class GamecontainerComponent implements OnInit {

  evenElements: Array<number> = [];
  oddElements: Array<number> = [];

  constructor() { }

  ngOnInit(): void {
  }

  createGameElement(counter: number) {
    if (counter % 2 === 0) {
      this.evenElements.push(counter);
    } else {
      this.oddElements.push(counter);
    }
  }
}
