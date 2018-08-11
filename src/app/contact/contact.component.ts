import { Component, OnInit } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {NgForm} from '../../../node_modules/@angular/forms';
import { AppService } from '../app.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private appservice :AppService) { }

  ngOnInit() {
    this.appservice.removecarttoken();
  }

  contactDetails(formObj:NgForm){
    var userId = formObj.value.Email;
   this.appservice.addNew(userId);
     console.log(formObj.value.Name);
     console.log(formObj.value.Email);
     console.log(formObj.value.Message);
  }
 

}
