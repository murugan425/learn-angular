import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ErrormsgComponent } from './message/errormsg/errormsg.component';
import { MsgcontainerComponent } from './message/msgcontainer/msgcontainer.component';
import { SuccessmsgComponent } from './message/successmsg/successmsg.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    SuccessmsgComponent,
    ErrormsgComponent,
    MsgcontainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
