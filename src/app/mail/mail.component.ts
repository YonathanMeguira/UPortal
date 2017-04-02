import { Component, OnInit, OnDestroy } from '@angular/core';
//import activatedRoute to see what are the param in the current view => username
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit, OnDestroy {

  public retrievedUser: string;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.retrievedUser = params['username'];
    });
  }

  //unsubscribe to avoid memerory leaks when we leave this view
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
