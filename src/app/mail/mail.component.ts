import { Component, OnInit, OnDestroy } from '@angular/core';
//import activatedRoute to see what are the param in the current view => username
import { ActivatedRoute } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {MailService} from "../services/mails/mails.service";
import {SanitizationService} from "../services/sanitizations/sanitization.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';

@Component({
  selector: 'filterDialogComponent',
  templateUrl: './mail.filter.component.html',
  styleUrls: ['./mail.filter.component.css'],
  providers:[SanitizationService],
})

export class FilterDialogComponent {
  public sanitizationFields:any;
  public computerFields:any;

  constructor(public dialogRef: MdDialogRef<any>, private sanitizationsService: SanitizationService) { }

  ngOnInit() {
    //this.getSanitizationFields();
    this.getComputers();
  }

  getSanitizationFields(){
    this.sanitizationsService.getSanitizationsFilterFields().subscribe(res => {
        console.log(res);
        this.sanitizationFields = res || {};
      },
      err => console.log(err)
    );
  }

  getComputers(){
    this.sanitizationsService.getComputerFields().subscribe(res => {
        console.log(res);
        this.computerFields = res || {};
      },
      err => console.log(err)
    );
  }

  change(event){
    console.log(event);
  }
}


@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css'],
  entryComponents: [FilterDialogComponent],
  providers:[MailService],
})

export class MailComponent implements OnInit, OnDestroy {
  public retrievedUser: string;
  public mailsData:any;
  private sub: any;
  private dialogRef: MdDialogRef<any>;
  public tableTitles: Array<string> = ['Details','Status', 'Start Time', 'Ticket ID', 'From', 'To', 'Subject', 'Size', 'Actions' ];

  constructor(private route: ActivatedRoute, private home:HomeComponent, private mailsService: MailService, public dialog: MdDialog) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.retrievedUser = params['username'];

      // TODO:: check if the home instance will be shared in the future between all components
      this.home.currUserName = params['username'];
      this.mailsService.getMails(this.retrievedUser)
        .subscribe(res => {
            console.log(res);
            this.mailsData = res.List || {};
          },
          err => console.log(err)
        );
    });
  }
  open() {
    let filterDialogConfig = new MdDialogConfig();

    this.dialogRef = this.dialog.open(FilterDialogComponent, filterDialogConfig);

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = null;
    });
  }


  // unsubscribe to avoid memory leaks when we leave this view
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}


