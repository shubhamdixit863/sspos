import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //totalproducts:number;
  constructor(public appservice:AppService,private msg:MessageService) { }
  //totalproducts= this.appservice.gettotalproducts();
  //this function removes cart products and relaod the page
  emptycart(){
   this.appservice.removeall();
    location.reload();
  }

  ngOnInit() {
   //this.appservice.removecarttoken();
  }


}
