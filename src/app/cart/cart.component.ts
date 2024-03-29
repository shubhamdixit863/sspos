import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Cart } from '../models/cart.model';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import {  NgForm } from '@angular/forms';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { MessageService } from '../message.service';
import { Product } from '../models/product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:Cart[]=[];
  cartvalue:number; //total cost of cart
  emptydata:any;
  deletecart=false;
  flag:number=0;
  
  constructor(private msg:MessageService, private appservice:AppService,private router: Router,private _flashMessagesService: FlashMessagesService,private spinner: NgxSpinnerService) { }
   
 
  getcartproducts(){
    
    this.carts=this.appservice.getproducts();
  }

  getcartvalue(){
   this.cartvalue= this.appservice.gettotalcartvalue();
  }

removeproduct(product){
  this.appservice.removeoneproduct(product);
  this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(()=>
  this.router.navigate(["/cart"]));
 
 
}

usersubmit(formObj:NgForm){
  this.spinner.show();
 if(formObj.value.name=="" || formObj.value.email=="" || formObj.value.phone=="" || formObj.value.address=="" || formObj.value.gender=="")
{
  this.spinner.hide();
  this._flashMessagesService.show('Sorry one or more of your field is empty', { cssClass: 'alert-danger', timeout: 2000 });
}

else{
 

 var user:User={name:formObj.value.name,email:formObj.value.email,phone:formObj.value.phone,address:formObj.value.address,payment:formObj.value.gender,comments:formObj.value.comment};
 var currentcart=this.appservice.getproducts();
 
this.appservice.userinsert(user,currentcart).subscribe(
  data => {this.emptydata=data;
    console.log(this.emptydata.message);
    
  },
  error => { console.log(error); // Error if any
  },
  ()=> { 
  
    
    //saving cart token to session storage for checking purpose
    this.appservice.storecartoken(this.emptydata.message);
    console.log(this.emptydata.message);
   
    if(formObj.value.gender=="COD"){
      this.spinner.hide();
      this.appservice.removeall();//removing cart so that we can start afresh
     
      //this._flashMessagesService.show('Thanks For your Order ,Your transaction id is'+this.appservice.getcarttoken(), { cssClass: 'alert-success', timeout: 100000 });
      this.router.navigate(['/orderstatus']);
      //this.appservice.removecarttoken();//removing cart token as well
      //alert("Thanks For Your Cash On Delivery Order");
      //location.href="/orderstatus";
     // this.router.navigateByUrl('/cart', {skipLocationChange: true}).then(()=>
//this.router.navigate(["/orderstatus"]));
      
     
    }
    
    else if(formObj.value.gender=="Paypal"){
      this.spinner.hide();
     //location.href="/payment";
     this.router.navigate(['/payment']);
    }
 
  }
 
)

 
  
}
}

increase(product:Product){
  //alert("increased");
  this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(()=>
this.router.navigate(["/cart"]));
  this.appservice.increasequantity(product,1);
}
decrease(product:Product){
  this.router.navigateByUrl('/refresh', {skipLocationChange: true}).then(()=>
  this.router.navigate(["/cart"]));
  this.appservice.decreasequantity(product,1);
}
  ngOnInit(): void {
   
  this.getcartproducts();
   this.getcartvalue();
   //for backward movement from browser
  this.appservice.removecarttoken();

  
  }
}
