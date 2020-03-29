import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-inactiveusers',
  templateUrl: './inactiveusers.component.html',
  styleUrls: ['./inactiveusers.component.scss']
})
export class InactiveusersComponent implements OnInit {

  @Input() users: string[];
  @Output() userSetToActive = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }

}
