import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
@Injectable() 
export class CanDeactivateGuard implements CanDeactivate<PaymentComponent> {
  canDeactivate(target: PaymentComponent): Observable<boolean> { 
    return Observable.create(function(observer) {
      if (target.hasChanges()) {
        observer.next(true);
      } else if(window.confirm('Do you really want to cancel?')) {
        observer.next(true);
      } 
      else {
        observer.next(false);
      }
    });
  } 
}