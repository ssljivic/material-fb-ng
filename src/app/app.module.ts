import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FlexLayoutModule} from '@angular/flex-layout';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {ProfileComponent} from './modules/profile/profile.component';
import {AuthComponent} from './modules/auth/auth.component';

declare const FB: any;
loadFbSdk();

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

function loadFbSdk() {
  const fbJs = document.createElement('script');
  fbJs.id = 'facebook-jssdk';
  fbJs.async = true;
  fbJs.src = '//connect.facebook.net/en_US/sdk.js';

  fbJs.onload = function() {
    FB.init({
      appId: '284859481960100',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.9'
    });
  };

  const ref = document.getElementsByTagName('script')[0];
  ref.parentNode.insertBefore(fbJs, ref);
}
