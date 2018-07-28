import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  totalproducts:number;
  constructor(private appservice:AppService) { }

  ngOnInit() {
   this.totalproducts= this.appservice.gettotalproducts();
  }

}
