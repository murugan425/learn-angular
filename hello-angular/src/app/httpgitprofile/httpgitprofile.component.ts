import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-httpgitprofile',
  templateUrl: './httpgitprofile.component.html',
  styleUrls: ['./httpgitprofile.component.css']
})
export class HttpgitprofileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params => {
        params.get('userid');
        params.get('login');
        console.log(params.get('userid') + '::::' + params.get('login'));
      });
  }

}
