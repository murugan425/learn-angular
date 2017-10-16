import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiveclass',
  templateUrl: './directiveclass.component.html',
  styleUrls: ['./directiveclass.component.css']
})
export class DirectiveclassComponent implements OnInit {
  isFavorite = true;
  isactive = true;

  constructor() { }

  ngOnInit() {
  }

  markFavorite() {
    this.isFavorite = !this.isFavorite;
  }
}
