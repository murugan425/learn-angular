import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favoritestar',
  templateUrl: './favoritestar.component.html',
  styleUrls: ['./favoritestar.component.css'],
  // Use in case if the application is used in old browser, as few browsers doesn't supports SHADOW DOM
  // Be cautious about using the Native/None ViewEncapsulation
  encapsulation : ViewEncapsulation.Emulated
})
export class FavoritestarComponent implements OnInit {
  // The below annotation binds the property with the view.

  // Alias 'favoriteflag' is used, so that the view is binded using the alias name
  // there by any change of the property name 'isFavorite' will not have impact in
  // view/consumers/other components making use of this reusbale component

  // Recommended to use the alias name in all the other component which are using the favoritestar component
  // This way changing the varible name here, will not have impact in all the other places.
  // However such changes will have impact in the favoritestar template.

  @Input('favoriteflag') isFavorite = true;
  @Output() marked = new EventEmitter(); // Subscriber/Client/Consumer/Listener Pattern
  @Output('favoriteclick') change = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  markFavorite() {
    this.isFavorite = !this.isFavorite;
    // Two Output events/actions are binded in this component (marked and change)
    // Both are using different ways to pass parameters
    this.marked.emit({eventObjVal: this.isFavorite});
    this.change.emit(this.isFavorite);
  }
}

export interface FavoriteEventArgs {
  favoriteVar: boolean;
}
