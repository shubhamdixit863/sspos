import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {NgForm} from '../../../node_modules/@angular/forms';
=======
>>>>>>> 77fd9d494d60324e041a232f2ce8074c8f4e62b0

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
<<<<<<< HEAD
  contactDetails(formObj:NgForm){
     console.log(formObj.value.Name);
     console.log(formObj.value.Email);
     console.log(formObj.value.Message);
  }
=======
>>>>>>> 77fd9d494d60324e041a232f2ce8074c8f4e62b0

}
