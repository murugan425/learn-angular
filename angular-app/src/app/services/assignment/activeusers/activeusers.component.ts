import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.scss']
})
export class ActiveusersComponent implements OnInit {

  @Input() users: string[];
  @Output() userSetToInactive = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }
}
