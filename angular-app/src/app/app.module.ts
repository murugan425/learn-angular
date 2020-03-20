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
    InputbindingComponent
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
