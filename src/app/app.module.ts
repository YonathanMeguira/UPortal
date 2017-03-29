import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { SanitizationComponent } from './sanitization/sanitization.component';
import { AppRoutingModule } from './app.routes';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
//custom dialog module for confirmation to be used throughout the app
import { DialogsModule } from "./modules/dialog.module"


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailComponent,
    SanitizationComponent,
    HomeComponent
  ],
 
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
