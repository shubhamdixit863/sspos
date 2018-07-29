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
  cartvalue:number; //total cost of cart 
  
  constructor(private appservice:AppService) { }
  getcartproducts(){
    this.carts=this.appservice.getproducts();
  }

  getcartvalue(){
   this.cartvalue= this.appservice.gettotalcartvalue();
  }

removeproduct(product){
  this.appservice.removeoneproduct(product);
  alert("Product removed ");
  location.reload();
}

  ngOnInit() {
  this.getcartproducts();
   this.getcartvalue();
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
