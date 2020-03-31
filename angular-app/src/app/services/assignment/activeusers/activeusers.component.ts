import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { UsersService } from '../../users.service';
import { CounterService } from '../../counter.service';

@Component({
  selector: 'app-activeusers',
  templateUrl: './activeusers.component.html',
  styleUrls: ['./activeusers.component.scss']
})
export class ActiveusersComponent implements OnInit {

  @Input() users: string[];

  constructor(private userService: UsersService,
              private counterService: CounterService) { }

  ngOnInit(): void {
  }

  onSetToInactive(id: number) {
    this.userService.deactivateUser(id);
    this.counterService.userDeactivated();
  }
}
