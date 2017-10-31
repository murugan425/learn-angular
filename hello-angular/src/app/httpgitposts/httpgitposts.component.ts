import { HttpgitpostsService } from './httpgitposts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-httpgitposts',
  templateUrl: './httpgitposts.component.html',
  styleUrls: ['./httpgitposts.component.css']
})
export class HttpgitpostsComponent implements OnInit {
  followers: any[];

  constructor(private service: HttpgitpostsService) { }

  ngOnInit() {
    this.service.getAll()
      .subscribe(followers => {
        this.followers = followers;
        console.log(followers);
      });
  }

}
