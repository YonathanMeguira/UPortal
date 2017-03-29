import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MailComponent } from "./mail/mail.component";
import { SanitizationComponent } from "./sanitization/sanitization.component";



const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    { path: 'mail', component: MailComponent },
    { path: 'sanitization', component: SanitizationComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
     exports: [RouterModule]

})
export class AppRoutingModule { }