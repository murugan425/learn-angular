import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { User } from 'src/app/common/model/user.model';
import { UsersService } from 'src/app/services/users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, OnDestroy {

  user: User;
  routeParamSubscription: Subscription;

  constructor(private userService: UsersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.user = this.userService.getUserByName(this.route.snapshot.params.name);

    // This will make sure that the component variable is updated whenever the params changes
    // without re-initialization of the component
    this.routeParamSubscription =  this.route.params.subscribe(
                    (params: Params) => {
                      this.user = this.userService.getUserByName(params.name);
                    });
  }

  // Angular by default removes the subscriptions from memory.
  // It's always preferrable to destroy the subscription when the component is destroyed.
  ngOnDestroy(): void {
    this.routeParamSubscription.unsubscribe();
  }
}
