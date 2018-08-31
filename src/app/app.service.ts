import { Injectable, Inject  } from "@angular/core";
import { WebStorageService, LOCAL_STORAGE ,SESSION_STORAGE} from "angular-webstorage-service";
import { Cart } from "./models/cart.model";
import { Product } from "./models/product.model";

import { Subject } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { Payment } from "./models/payment.model";
import { User } from "./models/user.model";
import { map } from 'rxjs/operators';


@Injectable({providedIn:'root'})
export class AppService{
     key="Product";
    cartsize:number;
    mycart:Cart[]=[];//creating a cart array
    mypayment:Payment;
    extractData:string;
    private cartupdated=new Subject<Cart[]>();
 constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService,private http:HttpClient,@Inject(SESSION_STORAGE) private sessionstorage: WebStorageService) {
         
    }

    //this function increase number of product and total price
    increasequantity(userproduct:Product,quantity:number){
        const storedcart:Cart[]= this.getproducts();
         //checking if the incoming product is already there
    let item = storedcart.find(p => p.product.id == userproduct.id); 
    item.quantity += quantity;
    item.product.price=item.quantity*userproduct.price;//changin total price according to quantity
    this.storage.set(this.key, storedcart);//saving cart to the local storage    
}

decreasequantity(userproduct:Product,quantity:number){
    const storedcart:Cart[]= this.getproducts();
         //checking if the incoming product is already there
    let item = storedcart.find(p => p.product.id == userproduct.id); 
    if(item.quantity>1){
        item.quantity -= quantity;
        item.product.price=item.quantity*userproduct.price;//changin total price according to quantity
        this.storage.set(this.key, storedcart);//saving cart to the local storage  

    }
    else{
        alert("Please remove the product ");
    }
}

 addtocart(userproduct:Product,quantity:number){
     //calling get products in local stored cart to fetch product
    const storedcart:Cart[]= this.getproducts();
    if(storedcart.length==0){
         //creating a new cart element
         const newcart:Cart={product:userproduct,quantity:quantity};
         //pushing that product in already stored cart
         storedcart.push(newcart);
         //saving the cart again
         this.storage.set(this.key, storedcart);//saving cart to the local storage
    }
    else if(storedcart.length>0){

   
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
    item.product.price=item.quantity*userproduct.price;//changin total price according to quantity
    //and saving the cart again to local browser storage
    this.storage.set(this.key, storedcart);//saving cart to the local storage
    console.log("Quantity of the product increased");

   }
    
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
    return this.mycart ;//returning empty array here 
}
    
}

//checking if cart is empty or not
checkifcartempty(){
    const storedcart:Cart[]= this.getproducts();
    if(storedcart != null){
        //this.cartsize=storedcart.length;
        return true;
     }
     else{
         return false;
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
userinsert(user:User,cart:Cart[])
{
  
    var databaseinput={user:user,cart:cart};
  return  this.http.post("http://localhost:3000/api/payment",databaseinput);

}

gettotalcartvalue(){
    const storedcart:Cart[]= this.getproducts();
    var totalprice:number=0;
    for(var i=0;i<storedcart.length;i++){
        totalprice=totalprice+storedcart[i].product.price;

    }

    //console.log(totalprice);
    return totalprice;
}
//after form is submiited we get a token to store it in and check for passing payment page
storecartoken(token:string){
    this.sessionstorage.set("paymentkey", token);
}
//this function returns cart token
getcarttoken(){
    return this.sessionstorage.get("paymentkey");
}
removecarttoken(){
    this.sessionstorage.remove("paymentkey");
}
//update cash on delivery payment after token
updatecod(token:string){
   
    return  this.http.post("http://localhost:3000/api/payment/update",token);
}
//getpayment status by sending session token 
getpaymentstaus(id:string){
    let headers = new Headers();
    //headers.append('Content-Type', 'application/json');
    //headers.append('id', id);
    //let params = new URLSearchParams();
    //params.append("someParamKey", id)
    var x = { property:id }

    return this.http.get<any>('http://localhost:3000/api/payment/status', { params: x } )
   //var id=this.sessionstorage.get("paymentkey");
     //this.http.get<any>("http://localhost:3000/api/payment/status");

}
paypalpayment(payment:Payment){
    return this.http.post("http://localhost:3000/api/payment/paypal",payment)
}

//this function sends mail to the client about the enquiry plus stores it in database
sendmail(userdata:any) {
    var headers = new Headers();
    const user  = 
       console.log(userdata);
       headers.append('Content-Type', 'application/X-www-form-urlencoded');
      return  this.http.post('http://localhost:3000/api/sendmail',userdata);
       
       
   }

//subscribe function
   ifSubscribe(mail:any){
    var headers =new Headers();  
   
    headers.append('Content-Type', 'application/X-www-form-urlencoded');
    //var email =[mail];
    console.log(mail);
    return  this.http.post('http://localhost:3000/api/subscribe',mail);

   }

}