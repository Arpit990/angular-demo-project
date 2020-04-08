import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  logo = "Art's";
  myDate = new Date();

  person = {
    name:'Arpit',
    work:'Study'
  };

  ngOnInit(): void {
    setInterval(()=>{
      this.myDate = new Date();
    },1000);
  }

}
