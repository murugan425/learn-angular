import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: {name: string, status: string};
  @Input() id: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private logger: LoggingService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({id: this.id, newStatus: status});
    this.logger.logServerStatus(status);
  }

}
