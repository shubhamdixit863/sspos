import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent   {
  products :Product[]=[
{id:"xy1",name:"SSR-3000-15-POS-TERMINAL",picture:"a.jpg",price:1375,category:"screentills"},
{id:"xy2",name:"SSR-T86E SCALE",picture:"b.jpg",price:1,category:"cashregister"},
{id:"xy3",name:"SSR-300-RECEIPT-PRINTERS",picture:"c.jpg",price:451,category:"printers"},
{id:"xy5",name:"EPSON-DOT-MATRIX-PRINTER",picture:"d.jpg",price:560,category:"kitchenprinter"},
{id:"xy6",name:"EPSON-DOT-MATRIX-PRINTER",picture:"d.jpg",price:560,category:"cashdrawers"},
{id:"xy7",name:"EPSON-DOT-MATRIX-PRINTER",picture:"d.jpg",price:560,category:"barcodescanner"},
{id:"xy8",name:"EPSON-DOT-MATRIX-PRINTER",picture:"d.jpg",price:560,category:"accessories"},


  ];
  //
  //dependency injection of appservice
  constructor(private appservice:AppService) { }

  addproduct(product){
    //the method return true if success;
   if(this.appservice.addtocart(product,1)){
    alert("Product added to the cart");
   }
   
  }
  

 

}
