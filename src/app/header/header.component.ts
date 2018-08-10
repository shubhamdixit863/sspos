import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
cartremove=true;
  //totalproducts:number;
  constructor(private appservice:AppService) { }
  //totalproducts= this.appservice.gettotalproducts();
  //this function removes cart products and relaod the page
  emptycart(){
    this.appservice.removeall();
    location.reload();
  }
  ngOnInit() {
   if(this.cartremove){
    this.appservice.removeall();
   }
  }

}
