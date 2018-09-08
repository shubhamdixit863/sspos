import { Component,OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { AppService } from '../app.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit  {
  products :Product[]=[
{id:"xy1",name:"SSR-3000-15-POS-TERMINAL",picture:"a.jpg",price:1375,category:"screentills",link:"ssr3000"},
{id:"xy2",name:"SSR-T86E SCALE",picture:"b.jpg",price:1,category:"cashregister",link:"cashdrawer24"},
{id:"xy3",name:"SSR-300-RECEIPT-PRINTERS",picture:"c.jpg",price:451,category:"printers",link:"ssr300"},
{id:"xy5",name:"EPSON-DOT-MATRIX-PRINTER",picture:"d.jpg",price:560,category:"kitchenprinter",link:"epsondotmatrix"},
{id:"xy6",name:"CD-24 – Heavy duty cash drawer 24v",picture:"h.jpg",price:198.00,category:"cashdrawers",link:"cd24"},
{id:"xy7",name:"Portable Data Terminal",picture:"i.jpg",price:550.00,category:"barcodescanner",link:"portdataterminal"},
{id:"xy8",name:"Magstripe Card Reader",picture:"h.jpg",price:120.00,category:"accessories",link:"magstripe"},
{id:"xy9",name:"SSR-C86H 2017 – 15″ Touch screen Cash Register with Software – 2017 model",picture:"e.jpg",price:1560.00,category:"cashregister",link:"ssrc86h2017"},
{id:"xy10",name:"SSR-C86H – 15″ Touch screen Cash Register with Software",picture:"e.jpg",price:1460.00,category:"cashregister",link:"ssrc86h"},
{id:"xy11",name:"SSR-86E 2017 – 12″ Touch screen Cash Register with Software – 2017 model",picture:"f.jpg",price:1280.00,category:"cashregister",link:"ssr86e2017"},
{id:"xy12",name:"SSR-86E – 12″ Touch screen Cash Register with Software",picture:"f.jpg",price:1180.00,category:"cashregister",link:"ssr86e"},
{id:"xy13",name:"SSR-250 Receipt Printers",picture:"g.jpg",price:385.00,category:"printers",link:"ssr250"},
{id:"xy14",name:"Omni-352 (Omni Directional Scanner)",picture:"j.jpg",price:330.00,category:"barcodescanner",link:"ssr352"},
{id:"xy15",name:"SSR-10.4 – 10.4″ Secondary Screen",picture:"k.jpg",price:440.00,category:"accessories",link:"cashdrawer24"},
{id:"xy16",name:"SSR-8.4 – 8.4″ Secondary Screen",picture:"m.jpg",price:330.00,category:"accessories",link:"cashdrawer24"},
{id:"xy17",name:"VFD-890 (VFD Customer Display)",picture:"l.jpg",price:160.00,category:"accessories",link:"vfd890"},

  ];
  //
  //dependency injection of appservice
  constructor(private appservice:AppService,private ss: SharedService) { }

  addproduct(product){
   console.log(product);
    //the method return true if success;
   this.appservice.addtocart(product,1,product.price)
    alert("Product added to the cart");
    this.ss.change();
   }
   

  ngOnInit() {
    this.appservice.removecarttoken();
    
  }
}
   


  
  

 

