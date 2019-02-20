import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
