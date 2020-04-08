import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  temp = "";
  isDisable = true;
  studentList = [];

  ngOnInit(): void {
  }

  checkEmpty() {
    if(this.temp === null) {
      this.isDisable = true;
    }
    else {
      this.isDisable = false;
    }
  }

  addStudent() {
    if(this.studentList.indexOf(this.temp) === -1) {
      this.studentList.push(this.temp);
    }
    else {
      
    }
    this.temp = "";
    this.isDisable = true;
  }

}
