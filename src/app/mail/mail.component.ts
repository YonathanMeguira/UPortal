import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
//import activatedRoute to see what are the param in the current view => username
import { ActivatedRoute } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {MailService} from "../services/mails/mails.service";
import {SanitizationService} from "../services/sanitizations/sanitization.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from '@angular/material';
import {DatePickerOptions} from "ng2-datepicker/lib-dist/ng2-datepicker.component";


@Component({
  selector: 'filterDialogComponent',
  templateUrl: './mail.filter.component.html',
  styleUrls: ['./mail.filter.component.css'],
  providers:[SanitizationService],
})

export class FilterDialogComponent {
  momentValue: any;
  channelFields: any;
  public sanitizationFields:any;
  public computerFields:any;
  public channelList:any;
  public sanFields:Object = new Object();

  @Input() fileName;
  @Input() options: DatePickerOptions;
  @Input() inputEvents: EventEmitter<{ type: string, data: string }>;
  @Output() outputEvents: EventEmitter<{ type: string, data: string }>;

  constructor(public dialogRef: MdDialogRef<any>, private sanitizationsService: SanitizationService) { }

  ngOnInit() {
    this.getSanitizationFields();
    this.getComputers();
    this.getChannels();
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

  getChannels(){
    this.sanitizationsService.getChannelFields().subscribe(res => {
        console.log(res);
        this.channelList = res || {};
      },
      err => console.log(err)
    );
  }

  sendFilterQuery(){
    
  }

  change(event){
    console.log(event);
  }

  setMoment(moment: any): any {
    this.momentValue = moment;
    // Do whatever you want to the return object 'moment'
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


