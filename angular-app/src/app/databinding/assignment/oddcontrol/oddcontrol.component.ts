import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-oddcontrol',
  templateUrl: './oddcontrol.component.html',
  styleUrls: ['./oddcontrol.component.scss']
})
export class OddcontrolComponent implements OnInit {

  @Input() oddNumber: number;

  constructor() {
    this.oddNumber = 0;
  }

  ngOnInit(): void {
  }

}
