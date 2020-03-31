import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss']
})
export class NewaccountComponent implements OnInit {

  constructor(private logger: LoggingService,
              private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  onCreateAccount(serverName: string, serverStatus: string) {
    this.accountService.addAccount(serverName, serverStatus);
    this.logger.logServerStatus(serverStatus);
  }

}
