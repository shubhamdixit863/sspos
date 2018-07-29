import { Component, OnInit } from '@angular/core';

import {NgForm} from '../../../node_modules/@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contactDetails(formObj:NgForm){
     console.log(formObj.value.Name);
     console.log(formObj.value.Email);
     console.log(formObj.value.Message);
  }


}
