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

@NgModule({
  declarations: [
    AppComponent,
    CheckboxComponent,
    HomeComponent,
    BasicComponent,
    SuccessalertComponent,
    WarningalertComponent
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
