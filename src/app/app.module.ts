import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FilterDialogComponent, MailComponent } from './mail/mail.component';
import { SanitizationComponent } from './sanitization/sanitization.component';
import { AppRoutingModule } from './app.routes';

import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
//custom dialog module for confirmation to be used throughout the app
import { DialogsModule } from "./modules/dialog.module"
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentDataTableModule } from '@covalent/data-table';
import { CovalentPagingModule } from '@covalent/paging';
//import { CovalentSearchModule } from '@covalent/search';

//import { AnimationsModule } from '@angular/animations';
//import {AuthGuard} from "./services/app-guard/auth-guard.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MailComponent,
    SanitizationComponent,
    HomeComponent,
    FilterDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    DialogsModule,
    BrowserAnimationsModule,
    CovalentDataTableModule
    // CovalentPagingModule,
    // CovalentSearchModule.forRoot()
  ],
  entryComponents:[FilterDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
