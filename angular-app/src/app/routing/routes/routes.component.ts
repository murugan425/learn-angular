import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(selectedDirective: string) {
    // by default the relativeTo points to the root url.
    this.router.navigate([selectedDirective]);
  }

  navigateToUserProfile(username: string) {
    // by default the relativeTo points to the root url.
    this.router.navigate([username], {relativeTo: this.route});
  }
}
