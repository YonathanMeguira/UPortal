import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from "../services/users/users.service"
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [Users]
})
export class LoginComponent implements OnInit {

  public isLoginInValidation: boolean;

  ngOnInit() {
    this.isLoginInValidation = false;
  }
  server: string = "";
  username: string = "";
  password: string = "";

  constructor(private userService: Users, private router: Router) { }

  checkLogin() {
    this.isLoginInValidation = true;
    this.userService.login(this.server, this.username, this.password)
      .subscribe(success => {
        console.log(success);
        var token = "Bearer " + success.AccessToken;
        localStorage.setItem("token", token);
        localStorage.setItem("serverName", this.server)
        this.isLoginInValidation = false;
        this.router.navigate(['/home/mail'])
      },
      err => console.log(err)
      );

  }
  EnableCookies() {
    console.log("cookies are now enabled")
  }

}
