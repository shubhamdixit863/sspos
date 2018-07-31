import { Injectable } from '@angular/core';
import { AppService } from './app.service';
@Injectable({
    providedIn: 'root'
  })
export class AuthService{
  constructor(private appservice:AppService){

  }

loggedin(){
    return !! this.appservice.getcarttoken();
}

}