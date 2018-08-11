import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-termscondition',
  templateUrl: './termscondition.component.html',
  styleUrls: ['./termscondition.component.css']
})
export class TermsconditionComponent implements OnInit {

  constructor(private appservice:AppService) { }

  ngOnInit() {
    this.appservice.removecarttoken();
  }


}
