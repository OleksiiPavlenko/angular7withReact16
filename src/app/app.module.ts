import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularParentComponent} from './components/angular-parent/angular-parent.component';
import {RoutingModule} from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AngularParentComponent
  ],
  imports: [
    RoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
