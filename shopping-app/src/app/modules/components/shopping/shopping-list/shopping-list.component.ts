import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Array<Ingredient> = [];

  constructor() {
    this.ingredients.push(
      new Ingredient('Tamarding', 5),
      new Ingredient('Oil', 50)
    );
  }

  ngOnInit(): void {
  }

}
