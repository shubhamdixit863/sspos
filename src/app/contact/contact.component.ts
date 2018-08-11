import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {NgForm} from '../../../node_modules/@angular/forms';
import { AppService } from '../app.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedback:any;

  constructor(private appservice :AppService,private _flashMessagesService: FlashMessagesService,private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.appservice.removecarttoken();
  }

  contactDetails(formObj:NgForm){
    this.spinner.show();
    var email = formObj.value.Email;
    var name = formObj.value.Name;
    var message = formObj.value.Message;
    var data={email:email,name:name,message:message};
   this.appservice.sendmail(data).subscribe(
     status=>{
      this.spinner.hide();
       this.feedback=status;
       console.log(this.feedback.message);
       this._flashMessagesService.show(this.feedback.message, { cssClass: 'alert-success', timeout: 3000 });
       //this._flashMessagesService.show();
       formObj.reset();
     },
     ()=>{
      
     }
   )
     
  }
 

}
