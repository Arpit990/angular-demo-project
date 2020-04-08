import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  isDisable = true;

  ngOnInit(): void {
    setTimeout(()=>{
      if(this.isDisable == true) {
        this.isDisable = false;
      }
      else {
        this.isDisable = true;
      }
    },2000)
  }

}
