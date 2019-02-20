import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { ShopOrdersComponent } from './shop-orders/shop-orders.component';
import { ShopProductsComponent } from './shop-products/shop-products.component';
import { ShopCartComponent } from './shop-cart/shop-cart.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [
  {path: 'home', component: ShopHomeComponent},
  {path: 'products', component: ShopProductsComponent},
  {path: 'orders', component: ShopOrdersComponent},
  {path: 'cart', component: ShopCartComponent},
  {path: 'admin/products', component: ShopOrdersComponent},
  {path: 'admin/orders', component: ShopOrdersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ShopRoutingComponents = [
  ShopHomeComponent,
  ShopProductsComponent,
  ShopOrdersComponent,
  ShopCartComponent,
];

export const AdminRoutingComponents = [
  AdminOrdersComponent,
  AdminProductsComponent
];
