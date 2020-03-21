import { Component, OnInit, Input } from '@angular/core';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-evencontrol',
  templateUrl: './evencontrol.component.html',
  styleUrls: ['./evencontrol.component.scss']
})
export class EvencontrolComponent implements OnInit {

  @Input() evenNumber: number;

  constructor() {
    this.evenNumber = 0;
  }

  ngOnInit(): void {
  }

}
