import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/common/model/user.model';
import { ActivatedRoute, Params, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { DirtyComponent } from 'src/app/auth/dirty-check-guard.service';


@Component({
  selector: 'app-useredit',
  templateUrl: './useredit.component.html',
  styleUrls: ['./useredit.component.scss']
})

export class UsereditComponent implements OnInit, OnDestroy, DirtyComponent {

  user: User;
  routeParamSubscription: Subscription;
  pageDirty = false;

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    /*
    this.routeParamSubscription =  this.route.params.subscribe(
      (params: Params) => {
        this.user = this.userService.getUserByName(params.name);
    });
    */

    this.route.data.subscribe(
      (data: Data) => this.user = data.user
    );
  }

  editUser() {
    this.userService.editUser(this.user);
  }

  resetForm() {
    this.user = new User('', '', '', '');
    this.pageDirty = true;
  }

  canDeactivate() {
    if (this.pageDirty) {
      return confirm('Do you want to discard the unsaved changes?');
    } else {
      return true;
    }
  }

  ngOnDestroy(): void {
    // this.routeParamSubscription.unsubscribe();
  }
}
