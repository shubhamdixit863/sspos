import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Cart } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:Cart[]=[];
  
  constructor(private appservice:AppService) { }
  getcartproducts(){
    this.carts=this.appservice.getproducts();
  }

  ngOnInit() {
  this.getcartproducts();
   
  }




  quantity:number=1
  
  private myMethod(event:any):void
{

  var x=3;
  alert("hello="+x);
}
private increment(event:any):void{
  this.quantity=this.quantity+1
}
private decrement(event:any):void{
  this.quantity=this.quantity-1
}

}
