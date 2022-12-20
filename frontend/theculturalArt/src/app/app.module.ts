import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteHeaderComponent } from './site-header/site-header.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
