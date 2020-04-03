import { Component, OnInit} from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipesService } from '../recipes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  addNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
