import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.scss']
})
export class GamecontrolComponent implements OnInit {

  counter: number;
  timer: any;

  @Output() counterEvent = new EventEmitter<number>();

  constructor() {
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  startGame() {
    this.timer = setInterval(() => {
       console.log(this.counter++);
       this.counterEvent.emit(this.counter);
      }, 1000);
  }

  stopGame() {
    clearInterval(this.timer);
  }
}
