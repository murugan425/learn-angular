import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RecipesComponent } from './modules/components/recipes/recipes.component';
import { ShoppingComponent } from './modules/components/shopping/shopping.component';
import { RecipesDetailsComponent } from './modules/components/recipes/recipes-details/recipes-details.component';
import { RecipeSelectComponent } from './modules/components/recipes/recipe-select/recipe-select.component';
import { RecipeEditComponent } from './modules/components/recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'recipes', component: RecipesComponent, children:
    [
      { path: '', component: RecipeSelectComponent},
      { path: 'new', component: RecipeEditComponent},
      { path: ':id', component: RecipesDetailsComponent},
      { path: ':id/edit', component: RecipeEditComponent}
    ]
  },
  { path: 'shopping', component: ShoppingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
