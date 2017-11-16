import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-httpgitprofile',
  templateUrl: './httpgitprofile.component.html',
  styleUrls: ['./httpgitprofile.component.css']
})
export class HttpgitprofileComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedroute.paramMap
      .subscribe(params => {
        params.get('userid');
        params.get('login');
        console.log(params.get('userid') + '::::' + params.get('login'));
      });
  }

  goBack() {
    this.router.navigate(['/followers'], {
      queryParams: {page: 1, order: 'asc'}
    });
  }

}
