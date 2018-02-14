import { IAppState, INITIAL_APPSTATE } from './app.store';
import { rootReducer } from './app.reducer';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NgRedux, NgReduxModule, DevToolsExtension } from '@angular-redux/store';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { CounterBoardComponent } from './counter-board/counter-board.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoListComponent,
    CounterBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<{}>, devTools: DevToolsExtension) {
    ngRedux.configureStore(rootReducer, INITIAL_APPSTATE, [], isDevMode() ? [devTools.enhancer()] : []);
  }
}
