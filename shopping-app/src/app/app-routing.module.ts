import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { RecipesComponent } from './modules/components/recipes/recipes.component';
import { ShoppingComponent } from './modules/components/shopping/shopping.component';


const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'recipes', component: RecipesComponent},
  { path: 'shopping', component: ShoppingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
