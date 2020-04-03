import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { RecipesComponent } from './modules/components/recipes/recipes.component';
import { RecipesListComponent } from './modules/components/recipes/recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './modules/components/recipes/recipes-details/recipes-details.component';
import { ShoppingComponent } from './modules/components/shopping/shopping.component';
import { ShoppingListComponent } from './modules/components/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './modules/components/shopping/shopping-edit/shopping-edit.component';
import { HomeComponent } from './modules/home/home.component';
import { RecipesItemComponent } from './modules/components/recipes/recipes-item/recipes-item.component';
import { DropdownDirective } from './shared/directives/dropdown.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    RecipesComponent,
    RecipesListComponent,
    RecipesDetailsComponent,
    ShoppingComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    HomeComponent,
    RecipesItemComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
