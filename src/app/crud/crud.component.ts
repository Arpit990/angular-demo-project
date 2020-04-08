import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  constructor() { }

  name = "";
  enr = "";
  selected = null;
  isDisable = true;

  studentList = [
    {
      studentname:null, enrollment:""
    }
  ];

  ngOnInit(): void {
  }
  

  insertStudent() {
    let tempStu = {studentname: this.name, enrollment:this.enr};

    if(tempStu.studentname == null) {
      this.isDisable = true;
    }
    else {
      this.isDisable = false;
      this.studentList.push(tempStu);
      this.name = "";
      this.enr = "";
    }
  }

  deleteStudent(i) {
    this.studentList.splice(i,1);
  }

  selectStudent(i) {
    this.selected = i;
    this.name = this.studentList[i].studentname;
    this.enr = this.studentList[i].enrollment;
  }

  editStudent() {
    this.studentList[this.selected].studentname = this.name;
    this.studentList[this.selected].enrollment = this.enr;
    this.selected = null; 
    this.name = "";
    this.enr = "";   
  }

}
