import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/common/model/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User;

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.userService.getUserByName(this.route.snapshot.params.name);
  }

}
