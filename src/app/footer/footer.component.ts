import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private appservice:AppService) { }

  usersubscribe(formObj:NgForm){
    if(formObj.value.email==""){
     alert("Email Required");
    }
    else{
      this.appservice.ifSubscribe(formObj.value.email).subscribe(
        data=>{
          console.log(data);
        }
      )
    }
   

  }

  

  ngOnInit() {
  }

}
