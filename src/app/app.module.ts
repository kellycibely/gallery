import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppComponent} from './app.component';
import {ComponentsModule} from './shared/components/components.module';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {PagesModule} from "./pages/pages.module";
import {AppRoutingModule} from './app-routing.module';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    ComponentsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    PagesModule,
    AppRoutingModule,
    RouterModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
