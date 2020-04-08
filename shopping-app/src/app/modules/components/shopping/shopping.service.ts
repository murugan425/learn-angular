import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private ingredients: Ingredient[] = [
      new Ingredient('Tamarind', 5),
      new Ingredient('Oil', 50)
    ];

  ingredientAdded = new Subject();

  constructor() { }

  getIngredients() {
    return this.ingredients;
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientAdded.next(this.ingredients);
  }

  addIngredients(ingredients: Array<Ingredient>) {
    // This will emit too many elements, so avoid this.
    /*
    ingredients.forEach(ingredient => {
      this.addIngredient(ingredient);
    });
    */

    this.ingredients.push(...ingredients);
    this.ingredientAdded.next(this.ingredients.slice());
  }
}
