import { AuthAdminGuardService } from './common/services/auth-admin-guard.service';
import { AuthGuardService } from './common/services/auth-guard.service';
import { JwtHelper } from 'angular2-jwt';
import { MockBackend } from '@angular/http/testing';
import { LoginAuthService } from './common/services/login-auth.service';
import { HttpgitpostsService } from './httpgitposts/httpgitposts.service';
import { AppErrorHandler } from './common/errors/app-error-handler';
import { HttppostsService } from './httpposts/httpposts.service';
import { HttpModule, Http, BaseRequestOptions } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { DisplayComponent } from './display/display.component';
import { PropertybindComponent } from './propertybind/propertybind.component';
import { AttributebindComponent } from './attributebind/attributebind.component';
import { ClassbindComponent } from './classbind/classbind.component';
import { StylebindComponent } from './stylebind/stylebind.component';
import { EventbindComponent } from './eventbind/eventbind.component';
import { EventComponent } from './event/event.component';
import { EventfilterComponent } from './eventfilter/eventfilter.component';
import { VariablebindComponent } from './variablebind/variablebind.component';
import { CustompipesComponent } from './custompipes/custompipes.component';
import { SummaryPipe } from './custompipes/summary.pipe';
import { FavoritestarComponent } from './favoritestar/favoritestar.component';
import { IobindComponent } from './iobind/iobind.component';
import { BootstrappanelComponent } from './bootstrappanel/bootstrappanel.component';
import { LikeheartComponent } from './likeheart/likeheart.component';
import { DirectivesComponent } from './directives/directives.component';
import { DirectiveifComponent } from './directiveif/directiveif.component';
import { DirectivehiddenComponent } from './directivehidden/directivehidden.component';
import { DirectiveswitchComponent } from './directiveswitch/directiveswitch.component';
import { DirectiveforComponent } from './directivefor/directivefor.component';
import { DirectiveclassComponent } from './directiveclass/directiveclass.component';
import { FormsComponent } from './forms/forms.component';
import { FormcontactComponent } from './formcontact/formcontact.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FormcourseComponent } from './formcourse/formcourse.component';
import { FormsignupComponent } from './formsignup/formsignup.component';
import { FormarraysComponent } from './formarrays/formarrays.component';
import { HttppostsComponent } from './httpposts/httpposts.component';
import { HttpcourseformComponent } from './httpcourseform/httpcourseform.component';
import { HttpgitpostsComponent } from './httpgitposts/httpgitposts.component';
import { HttpgitprofileComponent } from './httpgitprofile/httpgitprofile.component';
import { HttpapisComponent } from './httpapis/httpapis.component';
import { RouteapiComponent } from './routeapi/routeapi.component';
import { RoutenavbarComponent } from './routenavbar/routenavbar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageNotCompletedComponent } from './page-not-completed/page-not-completed.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { FormloginComponent } from './formlogin/formlogin.component';
import { FakeAuthProviderFactory } from './common/factory/fake-auth.factory';
import { PageNotAccessibleComponent } from './page-not-accessible/page-not-accessible.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
@NgModule({
  declarations: [
    // COMPONENT DECLARATIONS
    AppComponent,
    CourseComponent,
    DisplayComponent,
    PropertybindComponent,
    AttributebindComponent,
    ClassbindComponent,
    StylebindComponent,
    EventbindComponent,
    EventComponent,
    EventfilterComponent,
    VariablebindComponent,
    CustompipesComponent,

    // PIPES DECLARATIONS
    SummaryPipe,

    // COMPONENT DECLARATIONS
    FavoritestarComponent,
    IobindComponent,
    BootstrappanelComponent,
    LikeheartComponent,
    DirectivesComponent,
    DirectiveifComponent,
    DirectivehiddenComponent,
    DirectiveswitchComponent,
    DirectiveforComponent,
    DirectiveclassComponent,
    FormsComponent,
    FormcontactComponent,
    ZippyComponent,
    FormcourseComponent,
    FormsignupComponent,
    FormarraysComponent,
    HttppostsComponent,
    HttpcourseformComponent,
    HttpgitpostsComponent,
    HttpgitprofileComponent,
    HttpapisComponent,
    RouteapiComponent,
    RoutenavbarComponent,
    PageNotFoundComponent,
    PageNotCompletedComponent,
    PageHomeComponent,
    FormloginComponent,
    PageNotAccessibleComponent,
    PageLandingComponent
  ],
  imports: [
    // MODULES DEPENDENCY
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', component: PageHomeComponent},
      {path: 'course', component: CourseComponent},
      {path: 'display', component: DisplayComponent},
      {path: 'events', component: EventComponent},
      {path: 'pipes', component: CustompipesComponent},
      {path: 'io', component: IobindComponent},
      {path: 'directives', component: DirectivesComponent},
      {path: 'forms', component: FormsComponent},
      {path: 'crud', component: HttpapisComponent},
      {path: 'followers', component: HttpgitpostsComponent},
      {path: 'followerprofile/:userid/:login', component: HttpgitprofileComponent},
      {path: 'login', component: FormloginComponent},
      {path: 'home', component: PageHomeComponent},
      {path: 'userlanding', component: PageLandingComponent, canActivate: [AuthGuardService]},
      {path: 'userdetails', component: CustompipesComponent, canActivate: [AuthGuardService, AuthAdminGuardService]},
      {path: 'noaccess', component: PageNotAccessibleComponent},
      {path: 'upcoming', component: PageNotCompletedComponent},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [
    // SERVICES BEING USED
    CourseService,
    HttppostsService,
    HttpgitpostsService,
    // MAKE use of APPERRORHANDLER instead of angular default ERRORHANDLER
    { provide: ErrorHandler, useClass: AppErrorHandler },
    // AUTHENTICATION PROVIDERS
    LoginAuthService,
    { provide: Http, useFactory: FakeAuthProviderFactory, deps: [MockBackend, BaseRequestOptions] },
    // AUTHENTICATION/ROUTING/API GUARD SERVICES
    AuthGuardService,
    AuthAdminGuardService,
    // DEPENDENCY PROVIDERS required for FakeAuthenticationFactory
    MockBackend,
    BaseRequestOptions,
    JwtHelper
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
