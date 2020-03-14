import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

<<<<<<< HEAD
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { AppRoutingModule, ShopRoutingComponents, AdminRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopNavbarComponent } from './shop-navbar/shop-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ShopNavbarComponent,
    ShopRoutingComponents,
    AdminRoutingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
>>>>>>> feature/app_shopping
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
