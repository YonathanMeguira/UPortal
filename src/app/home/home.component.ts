import { Component, OnInit } from '@angular/core';
import { DialogsService } from '../services/dialogs/dialogs.service';
import { Users } from "../services/users/users.service";
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({

  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [DialogsService, Users]

})
export class HomeComponent implements OnInit {
  selectedOption: string;
  public result: any;

  constructor(private dialogsService: DialogsService, private userService: Users, private router: Router) { }

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

