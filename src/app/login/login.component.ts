import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from "../services/login/login.service"
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent {

  server: string = "";
  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) {}
  
  checkLogin() {
    this.loginService.checkLogin(this.server, this.username, this.password)
      .subscribe(success => {
        console.log(success);
        var token = "Bearer " + success.AccessToken;
        localStorage.setItem("token", token);
        this.router.navigate(['/mail'])
      },
      err => console.log(err)
      );

  }

}
