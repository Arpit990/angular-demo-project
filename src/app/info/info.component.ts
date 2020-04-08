import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  myDetail = {
    name:"Santoki Arpit",
    college:"Darshan",
    roll:"151",
    sem:"4th",
    branch:"Computer",
    course:"B.E.",
    email:"mail@gmail.com"
  };

  ngOnInit(): void {
  }

}
