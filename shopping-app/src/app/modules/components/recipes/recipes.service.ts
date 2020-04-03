import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipes.model';
import { Ingredient } from 'src/app/shared/models/ingredient.model';
import { ShoppingService } from '../shopping/shopping.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipes: Recipe[] = [
    new Recipe('Hyderabad Biryani', 'Easy Recipe for a spicy Biryani',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Hyderabadi_Chicken_Biryani.jpg/1024px-Hyderabadi_Chicken_Biryani.jpg',
      [
        new Ingredient('Chicken', 1),
        new Ingredient('Oil', 100)
      ]
      ),
    new Recipe('Pulihora', 'Pulihora is prepared with tamarind and jaggery',
      'https://aahaaramonline.com/wp-content/uploads/2019/04/Andhra_Nuvvula_Chintapandu_Pulihora_1.jpg',
      [
        new Ingredient('Tamarind', 5),
        new Ingredient('Oil', 50)
      ]
      )
  ];

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingCart(ingredients: Array<Ingredient>) {
      this.shoppingService.addIngredients(ingredients);
  }

  getRecipeByName(name: string) {
    return this.recipes.find(recipe => recipe.name.toLowerCase() === name.toLowerCase());
  }

  getRecipeByIndex(id: number) {
    return this.recipes[id];
  }
}
