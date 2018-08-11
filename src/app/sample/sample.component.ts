import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  constructor(private appservice:AppService) { }

  ngOnInit() {
    this.appservice.removeall();//removing cart so that we can start afresh
  }

}
