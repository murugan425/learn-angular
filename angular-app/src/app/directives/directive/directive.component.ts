import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

  arr = Array;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(selectedDirective: string) {
    // by default the relativeTo points to the root url.
    this.router.navigate([selectedDirective], {relativeTo: this.route});
  }
}
