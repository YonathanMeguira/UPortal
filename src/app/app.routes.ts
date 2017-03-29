import { NgModule } from "@angular/core";

import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { MailComponent } from "./mail/mail.component";
import { SanitizationComponent } from "./sanitization/sanitization.component";
import { HomeComponent } from "./home/home.component"


const appRoutes: Routes = [
    { path: '', component: LoginComponent },
    {
        path: 'home',
        component: HomeComponent,
        children: [
            { path: 'mail', component: MailComponent },
            { path: 'sanitization', component: SanitizationComponent }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }