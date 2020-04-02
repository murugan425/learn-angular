import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './material/checkbox/checkbox.component';
import { HomeComponent } from './components/home/home.component';
import { BasicComponent } from './components/basic/basic.component';
import { SuccessalertComponent } from './components/successalert/successalert.component';
import { WarningalertComponent } from './components/warningalert/warningalert.component';
import { StrinterpolationComponent } from './databinding/strinterpolation/strinterpolation.component';
import { PropbindingComponent } from './databinding/propbinding/propbinding.component';
import { EventbindingComponent } from './databinding/eventbinding/eventbinding.component';
import { BindingsComponent } from './databinding/bindings/bindings.component';
import { DirectiveComponent } from './directives/directive/directive.component';
import { IfdirectiveComponent } from './directives/ifdirective/ifdirective.component';
import { ClassdirectiveComponent } from './directives/classdirective/classdirective.component';
import { InputbindingComponent } from './databinding/inputbinding/inputbinding.component';
import { OutputbindingComponent } from './databinding/outputbinding/outputbinding.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { GamecontrolComponent } from './databinding/assignment/gamecontrol/gamecontrol.component';
import { OddcontrolComponent } from './databinding/assignment/oddcontrol/oddcontrol.component';
import { EvencontrolComponent } from './databinding/assignment/evencontrol/evencontrol.component';
import { GamecontainerComponent } from './databinding/assignment/gamecontainer/gamecontainer.component';
import { EventloggerComponent } from './directives/assignment/eventlogger/eventlogger.component';
import { BggreenDirective } from './directives/bggreen.directive';
import { BgblueDirective } from './directives/bgblue.directive';
import { ServiceComponent } from './services/service/service.component';
import { AccountComponent } from './services/account/account.component';
import { NewaccountComponent } from './services/newaccount/newaccount.component';
import { InactiveusersComponent } from './services/assignment/inactiveusers/inactiveusers.component';
import { ActiveusersComponent } from './services/assignment/activeusers/activeusers.component';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { UserComponent } from './routing/user/user.component';
import { RoutesComponent } from './routing/routes/routes.component';
import { UsereditComponent } from './routing/useredit/useredit.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    HomeComponent,
    BasicComponent,
    SuccessalertComponent,
    WarningalertComponent,
    StrinterpolationComponent,
    PropbindingComponent,
    EventbindingComponent,
    BindingsComponent,
    DirectiveComponent,
    IfdirectiveComponent,
    ClassdirectiveComponent,
    InputbindingComponent,
    OutputbindingComponent,
    LifecycleComponent,
    GamecontrolComponent,
    OddcontrolComponent,
    EvencontrolComponent,
    GamecontainerComponent,
    EventloggerComponent,
    BggreenDirective,
    BgblueDirective,
    ServiceComponent,
    AccountComponent,
    NewaccountComponent,
    ActiveusersComponent,
    InactiveusersComponent,
    HeaderComponent,
    FooterComponent,
    UserComponent,
    RoutesComponent,
    UsereditComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
