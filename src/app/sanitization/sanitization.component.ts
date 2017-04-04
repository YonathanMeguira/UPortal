import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {SanitizationService} from "../services/sanitizations/sanitization.service";

@Component({
  selector: 'app-sanitization',
  templateUrl: './sanitization.component.html',
  styleUrls: ['./sanitization.component.css'],
  providers: [SanitizationService]
})
export class SanitizationComponent implements OnInit {
  public currUserName: any;
  public retrievedUser: string;
  public sanitizationsData:any;
  public tableTitles: Array<string> = ['Details','Status', 'Start Time', 'Ticket ID', 'File Name', 'Size', 'User', 'Computer', 'Actions' ];

  private subscription:any;


  constructor(private route: ActivatedRoute, private home:HomeComponent, private sanitizationService: SanitizationService) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(params => {
      this.retrievedUser = params['username'];

      // TODO:: check if the home instance will be shared in the future between all components
      this.home.currUserName = params['username'];
      this.sanitizationService.getSanitizations(this.retrievedUser)
        .subscribe(res => {
            console.log(res);
            this.sanitizationsData = res.List || {};
          },
          err => console.log(err)
        );
    });
  }

  // unsubscribe to avoid memory leaks when we leave this view
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
