import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.css']
})
export class PageHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoLogin() {
    this.router.navigate(['/login']);
  }
}
