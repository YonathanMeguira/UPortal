import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { MailService} from "../services/mails/mails.service";


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  providers: [MailService]

})
export class MailComponent implements OnInit {
  public currentMails : string;
  private userName : string;

  constructor(private mailService: MailService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.userName = activatedRoute.snapshot.params['userName'];
  }

  ngOnInit() {
  }

  getMails() {
    this.mailService.getMails(this.userName).subscribe(success => {
            //this.router.navigate(['/home/mail'])
          this.currentMails = success.toString();
          },
          err => console.log(err))
  }
}
