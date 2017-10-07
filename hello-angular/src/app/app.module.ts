import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    DisplayComponent,
    PropertybindComponent,
    AttributebindComponent,
    ClassbindComponent,
    StylebindComponent,
    EventbindComponent,
    EventComponent,
    EventfilterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
