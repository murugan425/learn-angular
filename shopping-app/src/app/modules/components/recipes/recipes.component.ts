import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  @Input() selectedRecipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

}
