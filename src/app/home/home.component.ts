import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../services/dialogs/dialogs.service';
import { UserService } from "../services/users/users.service";
import { Router, ActivatedRoute, Params } from '@angular/router';
//import {AuthGuard} from "../services/app-guard/auth-guard.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // providers: [DialogsService, Users, AuthGuard]
  providers: [DialogsService, UserService]
})
export class HomeComponent implements OnInit {
  selectedOption: string;
  public result: any;
  public currUserName: any;

  constructor(private dialogsService: DialogsService, private userService: UserService, private router: Router) { }

  ngOnInit() {

  }

  public logout() {
    this.dialogsService
      .confirm('Logout ?', 'Are you sure you want to logout?')
      .subscribe(success => {
        this.result = success;
        console.log(this.result)
        //checking if the answer is yes => true
        if (this.result) {
          //logout service triggers error => access denied
          this.userService.logout().subscribe((success) => {
            console.log(success)
            this.router.navigate(["/"])
          })
        }
      }, err => console.log(err));
  }
}

