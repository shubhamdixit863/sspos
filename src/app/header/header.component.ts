import { Component,OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MessageService } from '../message.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  flag=false;
  subscription:any;
  //totalproducts:number;
  constructor(public appservice:AppService,private msg:MessageService,private ss: SharedService) {
    this.subscription = this.ss.getEmittedValue()
      .subscribe(
       
       ()=>{
         this.changeflag();
       }
      
      );

   }
  //totalproducts= this.appservice.gettotalproducts();
  //this function removes cart products and relaod the page
  emptycart(){
   this.appservice.removeall();
    location.reload();
    this.flag=false;
  }
  changeflag(){
    this.flag=true;
  }

  ngOnInit() {
    
   //this.appservice.removecarttoken();
   //this hows the empty red one if cart gets filled
  
   
  }


}
