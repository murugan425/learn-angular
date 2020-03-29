import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { UsersService } from '../users.service';
import { CounterService } from '../counter.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  accounts: Array<{name: string, status: string}> = [];
  activeUsers = [];
  inactiveUsers = [];
  activateCounts: number;
  deactivateCounts = 0;

  constructor(private accountService: AccountsService,
              private userService: UsersService,
              private counterService: CounterService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
    this.activeUsers = this.userService.activeUsers;
    this.inactiveUsers = this.userService.inactiveUsers;
    this.activateCounts = this.counterService.activateCount;
    this.deactivateCounts = this.counterService.deactivateCount;
  }

}
