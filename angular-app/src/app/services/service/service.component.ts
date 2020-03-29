import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {

  accounts: Array<{name: string, status: string}> = [];

  constructor(private accountService: AccountsService) { }

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

}
