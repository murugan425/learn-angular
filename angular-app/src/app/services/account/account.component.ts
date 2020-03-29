import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private logger: LoggingService,
              private accountService: AccountsService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    this.logger.logServerStatus(status);
  }

}
