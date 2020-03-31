import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { UsersService } from '../../users.service';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-inactiveusers',
  templateUrl: './inactiveusers.component.html',
  styleUrls: ['./inactiveusers.component.scss']
})
export class InactiveusersComponent implements OnInit {

  @Input() users: string[];

  constructor(private userService: UsersService,
              private counterService: CounterService) { }

  ngOnInit(): void {
  }

  onSetToActive(id: number) {
    this.userService.activateUser(id);
    this.counterService.userActivated();
  }

}
