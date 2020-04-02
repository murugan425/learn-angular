import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckboxComponent } from './material/checkbox/checkbox.component';
import { HomeComponent } from './components/home/home.component';
import { BasicComponent } from './components/basic/basic.component';
import { BindingsComponent } from './databinding/bindings/bindings.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { ServiceComponent } from './services/service/service.component';
import { IfdirectiveComponent } from './directives/ifdirective/ifdirective.component';
import { ClassdirectiveComponent } from './directives/classdirective/classdirective.component';
import { EventloggerComponent } from './directives/assignment/eventlogger/eventlogger.component';
import { UserComponent } from './routing/user/user.component';
import { RoutesComponent } from './routing/routes/routes.component';
import { UsereditComponent } from './routing/useredit/useredit.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'basics', component: BasicComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'directives', component: DirectiveComponent},
  { path: 'services', component: ServiceComponent},
  { path: 'directives/if', component: IfdirectiveComponent},
  { path: 'directives/class', component: ClassdirectiveComponent},
  { path: 'directives/logger', component: EventloggerComponent},
  { path: 'routing', component: RoutesComponent},
  { path: 'routing/user/:name', component: UserComponent},
  { path: 'routing/user/:name/edit', component: UsereditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
