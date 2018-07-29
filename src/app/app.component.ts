import { Component , OnInit} from '@angular/core';
import { PayPalConfig, PayPalEnvironment, PayPalIntegrationType } from 'ngx-paypal';
import { AppService } from './app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  title = 'app';

  constructor(private appservice:AppService){

  }
 
  public payPalConfig?: PayPalConfig;

    ngOnInit(): void {
      this.initConfig();
    }

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
          this.appservice.paymentstatus("success",data.intent,data.orderID,data.payerID,data.paymentID,data.paymentToken);
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
            total: 1
          }
        }]
      });
    }
}
