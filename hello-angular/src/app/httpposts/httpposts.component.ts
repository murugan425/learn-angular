import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-httpposts',
  templateUrl: './httpposts.component.html',
  styleUrls: ['./httpposts.component.css']
})
export class HttppostsComponent implements OnInit {
  typiCodePostResponse: any[];
  courses: any[];

  constructor(http: Http) {
    http.get('http://jsonplaceholder.typicode.com/posts')
    .subscribe(response => {
          console.log(response.json());
          this.typiCodePostResponse = response.json();
    });

    http.get('/api/courses')
    .subscribe(response => {
          console.log(response.json());
          this.courses = response.json();
    });
  }

  ngOnInit() {
  }

}
