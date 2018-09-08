import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor(private router: Router) { }

  alert(){
    alert("Thanks for shopping here\nScroll down to check our NEW ARRIVALS");
   
  }
  ngOnInit() {
  }

}
