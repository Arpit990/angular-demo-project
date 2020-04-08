import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }

  myName="";
  isDisable = true;

  person = {
    name:"Arpit",
    email:"abc@gmail.com"
  }

  ngOnInit(): void {
  }

  changeName(e) {
    if(e.target.value == "") {
      this.isDisable = true;
    }
    else {
      this.isDisable = false;
    }
    this.myName = e.target.value;
  }

}
