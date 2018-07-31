import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-finalstatus',
  templateUrl: './finalstatus.component.html',
  styleUrls: ['./finalstatus.component.css']
})
export class FinalstatusComponent implements OnInit {
  name:string;
  address:string;
  paymentid:string;
  product:string;
  type:string;

  constructor(private appservice:AppService) { }

  ngOnInit() {
    this.appservice.getpaymentstaus(this.appservice.getcarttoken()).subscribe(
      data => {
        console.log(data.message[0].name);
        this.name=data.message[0].name;
        this.address=data.message[0].address;
        this.paymentid=data.message[0].cutomerid;
        this.product=data.message[0].product;
        this.type=data.message[0].payment_id;
      },
      error => { console.log(error); // Error if any
      },
      ()=> { 
    this.appservice.removecarttoken();
  }
)


}
}