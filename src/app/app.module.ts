import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgBootstrapGridModule } from './ng-bootstrap-grid/ng-bootstrap-grid.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgBootstrapGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
