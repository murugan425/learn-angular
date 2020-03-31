import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.scss']
})
export class RecipesItemComponent implements OnInit {

  @Input() recipe: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit(): void {
  }

  showDetails() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

}
