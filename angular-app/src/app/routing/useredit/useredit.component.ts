import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/common/model/user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})
export class UsereditComponent implements OnInit {

  user: User;
  routeParamSubscription: Subscription;

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.routeParamSubscription =  this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUserByName(params.name);
      });
  }

  editUser() {
    this.userService.editUser(this.user);
  }

  resetForm() {
    this.user = new User('', '', '', '');
  }

}
