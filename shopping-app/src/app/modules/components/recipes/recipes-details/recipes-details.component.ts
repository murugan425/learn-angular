import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { ShoppingService } from '../../shopping/shopping.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit(): void {
  }

  // TODO - Don't cross connect of another module service into this module. 
  // Shopping & Recipes are having their own services as they are different domains in our app.
  addToShoppingCart() {
    this.selectedRecipe.ingredients.forEach(ingredient => {
      this.shoppingService.addIngredient(ingredient);
    });
  }
}
