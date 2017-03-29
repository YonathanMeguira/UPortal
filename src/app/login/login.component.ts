import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from "../services/login/login.service"
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  public isLoginInValidation: boolean;

  ngOnInit() {
    this.isLoginInValidation = false;
  }
  server: string = "";
  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  checkLogin() {
    this.isLoginInValidation = true;
    this.loginService.checkLogin(this.server, this.username, this.password)
      .subscribe(success => {
        console.log(success);
        var token = "Bearer " + success.AccessToken;
        localStorage.setItem("token", token);
        this.isLoginInValidation = false;
        this.router.navigate(['/mail'])
      },
      err => console.log(err)
      );

  }
  EnableCookies() {
    console.log("cookies are now enabled")
  }

}
