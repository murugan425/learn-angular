import { Component, OnInit } from '@angular/core';
import { FavoriteEventArgs } from '../favoritestar/favoritestar.component';

@Component({
  selector: 'app-iobind',
  templateUrl: './iobind.component.html',
  styleUrls: ['./iobind.component.css']
})
export class IobindComponent implements OnInit {
  courseAngular = {
    title: 'Angular',
    favflag: false
  };

  courseJava = {
    title: 'Java',
    favflag: true
  };
  constructor() { }

  ngOnInit() {
  }

  favoriteChange(favFlag: boolean) {
    console.log('Favorite star is changed as', favFlag);
  }

  printChange(eventObj: FavoriteEventArgs) {
    console.log('Favorite star is changed to ', eventObj);
  }

}
