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

  tweetByUser1 = {
    textContent: 'Tweet Content of User1.. If you wish like it',
    isLiked: false,
    likeCount: 0
  };

  tweetByUser2 = {
    textContent: 'Tweet Content of User2.. If you wish like it',
    isLiked: true,
    likeCount: 19
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

  likeChange(likeCount: number) {
    console.log('Like star is changed as', likeCount);
  }

}
