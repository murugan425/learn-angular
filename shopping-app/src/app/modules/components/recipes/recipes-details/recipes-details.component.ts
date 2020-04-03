import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.scss']
})
export class RecipesDetailsComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (param: Params) => {
        this.selectedRecipe = this.recipeService.getRecipeByIndex(param.id);
      }
    );
  }

  addToShoppingCart() {
      this.recipeService.addIngredientsToShoppingCart(this.selectedRecipe.ingredients);
  }

}
