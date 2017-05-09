// import { Component, OnInit } from '@angular/core';
// import { NgForm } from '@angular/forms';
// import { Users } from "../services/users/users.service"
// import { Router, ActivatedRoute, Params } from '@angular/router';
//
// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
//   providers: [Users]
// })
// export class LoginComponent implements OnInit {
//
//   public isLoginInValidation: boolean;
//
//   ngOnInit() {
//     this.isLoginInValidation = false;
//   }
//   server: string = "";
//   username: string = "";
//   password: string = "";
//
//   constructor(private userService: Users, private router: Router) { }
//
//   checkLogin() {
//     this.isLoginInValidation = true;
//     this.userService.login(this.server, this.username, this.password)
//       .subscribe(success => {
//         console.log(success);
//         var token = "Bearer " + success.AccessToken;
//         localStorage.setItem("token", token);
//         localStorage.setItem("serverName", this.server);
//         this.isLoginInValidation = false;
//         this.router.navigate(['/home/mail', success.UserAdditionalData.Domain + "\\" + this.username  || this.username]);
//       },
//       err => console.log(err)
//       );
//
//   }
//   EnableCookies() {
//     console.log("cookies are now enabled")
//   }
//
// }

import {Component, OnInit} from '@angular/core';
import { UserService } from "../services/users/users.service"
import {Router, ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  user: any = {};
  public wrongId = false;
  public isSubmitted = false;
  public checkingUser = false;

  constructor(private userService: UserService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.isSubmitted = true;
    this.checkLogin();
  }

  checkLogin() {
    this.checkingUser = true;
    this.userService.login(this.user.server, this.user.username, this.user.password)
      .subscribe(
        success => {
          console.log(success);
          const token = 'Bearer ' + success.AccessToken;
          localStorage.setItem('token', token);
          localStorage.setItem('serverName', this.user.server);
          this.checkingUser = false;
          this.router.navigate(['/home/mail', success.UserAdditionalData.Domain + "/" + this.user.username  || this.user.username ], { skipLocationChange: true });
        },
        error => {
          console.log(error);
          this.wrongId = true;
          this.isSubmitted = false;
          this.checkingUser = false;
        }
      );

    console.log(this.router);
  }
}
