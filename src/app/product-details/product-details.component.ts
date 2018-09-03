import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product.model';
import { AppService } from '../app.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  public id: string;
  public category:string;
public picture: string;
public name: string;
public price: number;

  producted :Product[]=[
    {id:"xy1",name:"SSR-3000-15-POS-TERMINAL",picture:"a.jpg",price:1375,category:"screentills"},
    {id:"xy2",name:"SSR-T86E SCALE",picture:"b.jpg",price:1,category:"cashregister"},
    {id:"xy3",name:"SSR-300-RECEIPT-PRINTERS",picture:"c.jpg",price:451,category:"printers"},
    {id:"xy5",name:"EPSON-DOT-MATRIX-PRINTER",picture:"d.jpg",price:560,category:"kitchenprinter"},
    {id:"xy6",name:"CD-24 – Heavy duty cash drawer 24v",picture:"h.jpg",price:198.00,category:"cashdrawers"},
    {id:"xy7",name:"Portable Data Terminal",picture:"i.jpg",price:550.00,category:"barcodescanner"},
    {id:"xy8",name:"Magstripe Card Reader",picture:"h.jpg",price:120.00,category:"accessories"},
    {id:"xy9",name:"SSR-C86H 2017 – 15″ Touch screen Cash Register with Software – 2017 model",picture:"e.jpg",price:1560.00,category:"cashregister"},
    {id:"xy10",name:"SSR-C86H – 15″ Touch screen Cash Register with Software",picture:"e.jpg",price:1460.00,category:"cashregister"},
    {id:"xy11",name:"SSR-86E 2017 – 12″ Touch screen Cash Register with Software – 2017 model",picture:"f.jpg",price:1280.00,category:"cashregister"},
    {id:"xy12",name:"SSR-86E – 12″ Touch screen Cash Register with Software",picture:"f.jpg",price:1180.00,category:"cashregister"},
    {id:"xy13",name:"SSR-250 Receipt Printers",picture:"g.jpg",price:385.00,category:"printers"},
    {id:"xy14",name:"Omni-352 (Omni Directional Scanner)",picture:"j.jpg",price:330.00,category:"barcodescanner"},
    {id:"xy15",name:"SSR-10.4 – 10.4″ Secondary Screen",picture:"k.jpg",price:440.00,category:"accessories"},
    {id:"xy16",name:"SSR-8.4 – 8.4″ Secondary Screen",picture:"m.jpg",price:330.00,category:"accessories"},
    {id:"xy17",name:"VFD-890 (VFD Customer Display)",picture:"l.jpg",price:160.00,category:"accessories"},
    
      ];
      products:Product[]=[];

  constructor(private activatedroute: ActivatedRoute,private appservice:AppService,private ss: SharedService) { }

  addproduct(product){
   console.log(product);
    //the method return true if success;
   this.appservice.addtocart(product,1,product.price)
    alert("Product added to the cart");
    this.ss.change();
   }

  ngOnInit() {
  
    this.activatedroute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id); // Print the parameter to the console. 

     this.producted.forEach(element => {
      if(element.id===this.id){
        console.log("product found");
        this.category =element.category;
        this.picture =element.picture;
        this.name =element.name;
        this.price =element.price;
       
        this.products =[{id:this.id,name:this.name,picture:this.picture,price:this.price,category:this.category}];
      } 
     }); 

   
  });
 
  this.appservice.removecarttoken();
 
  }

}
