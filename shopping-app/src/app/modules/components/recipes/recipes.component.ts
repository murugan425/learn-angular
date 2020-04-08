import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Recipe } from './recipes.model';
import { RecipesService } from './recipes.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit, OnDestroy {

  @Input() selectedRecipe: Recipe;

  recipeSelectionSubscription: Subscription;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
    this.recipeSelectionSubscription = this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;
    });
  }

  ngOnDestroy() {
    this.recipeSelectionSubscription.unsubscribe();
  }

}
