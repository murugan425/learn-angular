import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './material/checkbox/checkbox.component';
import { HomeComponent } from './components/home/home.component';
import { BasicComponent } from './components/basic/basic.component';
import { BindingsComponent } from './databinding/bindings/bindings.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { ServiceComponent } from './services/service/service.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'basics', component: BasicComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'directives', component: DirectiveComponent},
  { path: 'services', component: ServiceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
