import { Injectable, Inject  } from "@angular/core";
import { WebStorageService, LOCAL_STORAGE } from "angular-webstorage-service";
import { Cart } from "./models/cart.model";
import { Product } from "./models/product.model";
import { reject } from "../../node_modules/@types/q";

@Injectable({providedIn:'root'})
export class AppService{
     key="Product";
    cartsize:number;
    mycart:Cart[]=[];//creating a cart array
 constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) {
         
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

 }   

 getproducts(){
    const storedCart = this.storage.get(this.key);
    if (storedCart != null) {
        this.mycart = storedCart;
    }
    return this.mycart;
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



}