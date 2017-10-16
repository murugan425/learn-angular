import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    DirectiveclassComponent
  ],
  imports: [
    // MODULES DEPENDENCY
    BrowserModule,
    FormsModule
  ],
  providers: [
    // SERVICES BEING USED
    CourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
