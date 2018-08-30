import { Component, OnInit } from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { AppService } from '../app.service';
import { Payment } from '../models/payment.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
//totalpay:number;
payment:Payment;
changesSaved=false;
  constructor(public appservice:AppService,private router:Router) { }

  ngOnInit() {
    this.initConfig();
    
   }

 
  public payPalConfig?: PayPalConfig;

hasChanges(){
  //return true;
  console.log(this.changesSaved);
  return this.changesSaved;
 
  
}    




  private initConfig(): void {
   
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Production, {
      commit: true,
      client: {
        //sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
        production:'AbFPOm1WI1jJW65WvmnQSPeLyRqAvKO9v7xTa2t4Nicp6jNWGX6PdVvZt8FphdyCc9l1x5YsORrwm2kS'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        this.changesSaved=true;
        console.log(this.changesSaved);
        
        
        console.log("success");
        console.log(data);
        //storing customerid from session token as well
        this.payment={customerid:this.appservice.getcarttoken(),intent:data.intent,orderID:data.orderID,payerID:data.payerID,paymentID:data.paymentID,paymentToken:data.paymentToken,billingid:"NA",status:"Payment Success"}
        this.appservice.paypalpayment(this.payment).subscribe( 
          data => {
          console.log(data);
          
        },
        error => { console.log(error); // Error if any
        },
        ()=> {
          this.appservice.removeall();//removing cart so that we can start afresh

          this.router.navigate(['/orderstatus']);
        }
      )
      },
      onCancel: (data, actions) => {
        this.changesSaved=true;
        console.log(this.changesSaved);
        //this.changesSaved=true;
        console.log("Cancel");
        console.log(data);
       this.payment={customerid:this.appservice.getcarttoken(),intent:"sale",orderID:"NA",payerID:"NA",paymentID:"User Cancelled", paymentToken:"User Cancelled",billingid:"NA",status:"Payment Failed"}
        this.appservice.paypalpayment(this.payment).subscribe( 
          data => {
          console.log(data);
          
        },
        error => { 
          console.log(error); // Error if any
        },
        ()=> {
          //this.appservice.removeall();//removing cart so that we can start afresh

          this.router.navigate(['/paymentfail']);
        }
      )
        console.log(data);
        //this.appservice.paymentstatus("success",data.intent,data.orderID,data.payerID,data.paymentID,data.paymentToken);
      },
      onError: (err) => {
        console.log("Error");
        console.log(err);
        this.router.navigate(['/paymentfail']);
      },
      transactions: [{
        amount: {
          currency: 'AUD',
          total:this.appservice.gettotalcartvalue()
        }
      }]
    });
  }
}
