import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-likeheart',
  templateUrl: './likeheart.component.html',
  styleUrls: ['./likeheart.component.css']
})
export class LikeheartComponent implements OnInit {
  @Input('like-indicator') isLiked: boolean;
  @Input('likes-count') likeCount: number;
  @Output('like-click') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markLiked() {
    this.likeCount += this.isLiked ? -1 : 1;
    this.isLiked = !this.isLiked;
    this.change.emit(this.likeCount);
  }
}
