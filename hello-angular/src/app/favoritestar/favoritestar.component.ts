import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favoritestar',
  templateUrl: './favoritestar.component.html',
  styleUrls: ['./favoritestar.component.css']
})
export class FavoritestarComponent implements OnInit {

  isFavorite = true;

  constructor() { }

  ngOnInit() {
  }

  markFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
