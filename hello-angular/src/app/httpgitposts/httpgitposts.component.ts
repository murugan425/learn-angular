import { ActivatedRoute } from '@angular/router';
import { HttpgitpostsService } from './httpgitposts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpgitposts',
  templateUrl: './httpgitposts.component.html',
  styleUrls: ['./httpgitposts.component.css']
})
export class HttpgitpostsComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: HttpgitpostsService) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => {
      console.log(params.get('page') + '::::' + params.get('order'));
    });

    this.service.getAll()
      .subscribe(followers => {
        this.followers = followers;
        console.log(followers);
      });
  }

}
