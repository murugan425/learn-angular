import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }


  addToShoppingCart() {
      this.recipeService.addIngredientsToShoppingCart(this.selectedRecipe.ingredients);
  };

}
