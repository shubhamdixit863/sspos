import { Injectable, Inject  } from "@angular/core";
import { WebStorageService, LOCAL_STORAGE } from "angular-webstorage-service";
import { Cart } from "./models/cart.model";
import { Product } from "./models/product.model";
import { reject } from "../../node_modules/@types/q";
import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Payment } from "./models/payment.model";


@Injectable({providedIn:'root'})
export class AppService{
     key="Product";
    cartsize:number;
    mycart:Cart[]=[];//creating a cart array
    mypayment:Payment;
    private cartupdated=new Subject<Cart[]>();
 constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http:HttpClient) {
         
    }

 addtocart(userproduct:Product,quantity:number){
     //calling get products in local stored cart to fetch product
    const storedcart:Cart[]= this.getproducts();
    //checking if the incoming product is already there
    let item = storedcart.find(p => p.product.id == userproduct.id); 
    //if incoming product is not there
    if (item === undefined) {
        //creating a new cart element
        const newcart:Cart={product:userproduct,quantity:quantity};
        //pushing that product in already stored cart
        storedcart.push(newcart);
        //saving the cart again
        this.storage.set(this.key, storedcart);//saving cart to the local storage

    }
    //if the product existsthen just increaing the quantity of item
   else{
    item.quantity += quantity;
    //and saving the cart again to local browser storage
    this.storage.set(this.key, storedcart);//saving cart to the local storage
    console.log("Quantity of the product increased");

   }
    
  
  
  console.log(this.storage.get(this.key));
return true;
 }   

 getproducts(){
    const storedCart = this.storage.get(this.key);
    if (storedCart != null) {
        this.mycart = storedCart;
        return this.mycart;
    }
else{
    return null;
}
    
}
//function to show the number of products currently present in cart
gettotalproducts(){
    //getting stored cart from total products saved in local storage
    const storedcart:Cart[]= this.getproducts();
    
    //checking if products exist in cart then only returning size
     if(storedcart != null){
        this.cartsize=storedcart.length;
        return this.cartsize;
     }
     //else returning zero
    else{
        this.cartsize=0;
        return this.cartsize;
    }

}

removeoneproduct(userproduct:Product){
    const storedcart:Cart[]= this.getproducts();
    //checking if the incoming product is already there
    let item = storedcart.find(p => p.product.id == userproduct.id); 
    //if incoming product is not there
    var index = storedcart.indexOf(item);
    if (item === undefined) {
        console.log("product donot exists");

    }

else{
    storedcart.splice(index, 1);
    this.storage.set(this.key, storedcart);//saving cart to the local storage
}

}


removeall(){
    const storedcart:Cart[]= this.getproducts();
    if(storedcart!=null){
       
        this.storage.remove(this.key);
    }

    else if(storedcart==null){
        console.log("Nothing to remove");
    }
}

//adding order to database after payment
paymentstatus(status:string,intent:string, orderID:string,payerID:string,paymentID:string,paymentToken:string)
{
    this.mypayment={intent:intent,orderID:orderID,payerID:payerID,paymentID:paymentID,paymentToken:paymentToken};
    //retrieving product on the cart after the payment is success to be stored in database
    const datbasecart:Cart[]= this.getproducts();
    //this whole json object will be stored in database
    const databaseinput={status:status,paymentinfo:this.mypayment,productinfo:datbasecart};
    this.http.post<{message:string}>("http://localhost:3000/api/payment",databaseinput).subscribe((message)=>{
          
        console.log(message.message);
            
             
         });

}

gettotalcartvalue(){
    const storedcart:Cart[]= this.getproducts();
    var totalprice:number=0;
    for(var i=0;i<storedcart.length;i++){
        totalprice=totalprice+storedcart[i].product.price;

    }

    console.log(totalprice);
    return totalprice;
}



}