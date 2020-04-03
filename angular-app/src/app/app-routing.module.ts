import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { PagenotaccessibleComponent } from './pages/pagenotaccessible/pagenotaccessible.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { DirtyCheckGuardService } from './auth/dirty-check-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'basics', component: BasicComponent},
  { path: 'bindings', component: BindingsComponent},
  { path: 'directives', component: DirectiveComponent, children:
    [
      { path: 'if', canActivate: [AuthGuardService], component: IfdirectiveComponent},
      { path: 'class', component: ClassdirectiveComponent},
      { path: 'logger', component: EventloggerComponent}
    ]
  },
  { path: 'services', component: ServiceComponent},
  { path: 'routing', canActivate: [AuthGuardService], component: RoutesComponent, children:
    [
      { path: 'user/:name', component: UserComponent},
      { path: 'user/:name/edit', component: UsereditComponent, canDeactivate: [DirtyCheckGuardService]}
    ]
  },
  {path: 'not-found', component: PagenotfoundComponent},
  {path: 'noaccess', component: PagenotaccessibleComponent, data: {errorCode: 401, errorMsg: 'Access Not Allowed'}},
  {path: '**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
