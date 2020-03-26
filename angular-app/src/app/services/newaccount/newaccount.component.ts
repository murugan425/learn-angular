import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-newaccount',
  templateUrl: './newaccount.component.html',
  styleUrls: ['./newaccount.component.scss']
})
export class NewaccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private logger: LoggingService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.logger.logServerStatus(accountStatus);
  }

}
