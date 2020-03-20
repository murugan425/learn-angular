import { Component, OnInit, Input } from '@angular/core';
import { User} from 'src/app/common/model/user.model';

@Component({
  selector: 'app-inputbinding',
  templateUrl: './inputbinding.component.html',
  styleUrls: ['./inputbinding.component.scss']
})
export class InputbindingComponent implements OnInit {

  @Input() user: User;

  constructor() {
  }

  ngOnInit(): void {
  }

}
