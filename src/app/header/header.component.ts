import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //totalproducts:number;
  constructor(private appservice:AppService) { }
  //totalproducts= this.appservice.gettotalproducts();
  emptycart(){
    this.appservice.removeall();
    location.reload();
  }
  ngOnInit() {
   
  }

}
