import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SocialButtonsComponent } from './social-buttons.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialButtonsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
