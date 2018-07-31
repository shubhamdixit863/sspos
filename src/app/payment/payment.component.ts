import { Component, OnInit } from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { AppService } from '../app.service';
import { Payment } from '../models/payment.model';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
//totalpay:number;
payment:Payment;
  constructor(private appservice:AppService) { }

  ngOnInit() {
    this.initConfig();
   }

 
  public payPalConfig?: PayPalConfig;

    

  private initConfig(): void {
    this.payPalConfig = new PayPalConfig(PayPalIntegrationType.ClientSideREST, PayPalEnvironment.Sandbox, {
      commit: true,
      client: {
        sandbox: 'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R'
      },
      button: {
        label: 'paypal',
      },
      onPaymentComplete: (data, actions) => {
        
        console.log("success");
        console.log(data);
        this.payment={intent:data.intent,orderID:data.orderID,payerID:data.payerID,paymentID:data.paymentID,paymentToken:data.paymentToken,billingid:"NA",status:"Payment Success"}
        this.appservice.paypalpayment(this.payment).subscribe( 
          data => {
          console.log(data);
          
        },
        error => { console.log(error); // Error if any
        },
        ()=> {}
      )
      },
      onCancel: (data, actions) => {
        console.log("Cancel");
        console.log(data);
        //this.appservice.paymentstatus("success",data.intent,data.orderID,data.payerID,data.paymentID,data.paymentToken);
      },
      onError: (err) => {
        console.log("Error");
        console.log(err);
      },
      transactions: [{
        amount: {
          currency: 'USD',
          total:this.appservice.gettotalcartvalue()
        }
      }]
    });
  }
}
