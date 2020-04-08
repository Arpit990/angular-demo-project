import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }

  studentname = "";
  dob = "";
  gender = "";
  hobby = "";
  address = "";
  email = "";
  studentmobile = "";

  fathername = "";
  mothername = "";
  homemobile = "";

  tenschool = "";
  tenpercentage = "";
  tenmath = "";
  tenscience = "";

  twelveschool = "";
  twelvepercentage = "";
  twelvephysics = "";
  twelvechemistry = "";
  twelvemath = "";

  course = "";
  branch = "";

  bankname = "";
  bankaccountno = "";
  aadharno = "";



  selectedrecord = null;
  show = true;
  showBtn = true;

  studentinformation = [
    {
      studentname_ : "",
      dob_ : "",
      gender_ : "",
      hobby_ : "",
      address_ : "",
      email_ : "",
      studentmobile_ : "",

      fathername_ : "",
      mothername_ : "",
      homemobile_ : "",

      tenschool_ : "",
      tenpercentage_ : "",
      tenmath_ : "",
      tenscience_ : "",

      twelveschool_ : "",
      twelvepercentage_ : "",
      twelvephysics_ : "",
      twelvechemistry_ : "",
      twelvemath_ : "",

      course_ : "",
      branch_ : "",

      bankname_ : "",
      bankaccountno_ : "",
      aadharno_ : ""
    }
  ]

  ngOnInit(): void {
  }

  addStudent() {
    let tempStu = {
      studentname_ : this.studentname,
      dob_ : this.dob,
      gender_ : this.gender,
      hobby_ : this.hobby,
      address_ : this.address,
      email_ : this.email,
      studentmobile_ : this.studentmobile,

      fathername_ : this.fathername,
      mothername_ : this.mothername,
      homemobile_ : this.homemobile,

      tenschool_ : this.tenschool,
      tenpercentage_ : this.tenpercentage,
      tenmath_ : this.tenmath,
      tenscience_ : this.tenscience,

      twelveschool_ : this.twelveschool,
      twelvepercentage_ : this.twelvepercentage,
      twelvephysics_ : this.twelvephysics,
      twelvechemistry_ : this.twelvechemistry,
      twelvemath_ : this.twelvemath,

      course_ : this.course,
      branch_ : this.branch,

      bankname_ : this.bankname,
      bankaccountno_ : this.bankaccountno,
      aadharno_ : this.aadharno
    }

    this.studentinformation.push(tempStu);
  }

  deleteRecord(i) {
    this.studentinformation.splice(i,1);
  }

  selectStudent(i) {
    this.selectedrecord = i;

    this.studentname = this.studentinformation[i].studentname_;
    this.dob  = this.studentinformation[i].dob_ ;
    this.gender  = this.studentinformation[i].gender_ ;
    this.hobby  = this.studentinformation[i].hobby_ ;
    this.address  = this.studentinformation[i].address_ ;
    this.email  = this.studentinformation[i].email_ ;
    this.studentmobile  = this.studentinformation[i].studentmobile_ ;

    this.fathername  = this.studentinformation[i].fathername_ ;
    this.mothername  = this.studentinformation[i].mothername_ ;
    this.homemobile  = this.studentinformation[i].homemobile_ ;

    this.tenschool  = this.studentinformation[i].tenschool_ ;
    this.tenpercentage  = this.studentinformation[i].tenpercentage_ ;
    this.tenmath  = this.studentinformation[i].tenmath_ ;
    this.tenscience  = this.studentinformation[i].tenscience_ ;
    this.twelveschool  = this.studentinformation[i].twelveschool_ ;
    this.twelvepercentage  = this.studentinformation[i].twelvepercentage_ ;
    this.twelvephysics  = this.studentinformation[i].twelvephysics_ ;
    this.twelvechemistry  = this.studentinformation[i].twelvechemistry_ ;
    this.twelvemath  = this.studentinformation[i].twelvemath_ ;

    this.course  = this.studentinformation[i].course_ ;
    this.branch  = this.studentinformation[i].branch_ ;

    this.bankname  = this.studentinformation[i].bankname_ ;
    this.bankaccountno  = this.studentinformation[i].bankaccountno_ ;
    this.aadharno  = this.studentinformation[i].aadharno_ ;

  }

  editRecord() {
    this.studentinformation[this.selectedrecord].studentname_ = this.studentname;
    this.studentinformation[this.selectedrecord].dob_ = this.dob;
    this.studentinformation[this.selectedrecord].gender_ = this.gender;
    this.studentinformation[this.selectedrecord].hobby_ = this.hobby;
    this.studentinformation[this.selectedrecord].address_ = this.address;
    this.studentinformation[this.selectedrecord].email_ = this.email;
    this.studentinformation[this.selectedrecord].studentmobile_ = this.studentmobile;

    this.studentinformation[this.selectedrecord].fathername_ = this.fathername;
    this.studentinformation[this.selectedrecord].mothername_ = this.mothername;
    this.studentinformation[this.selectedrecord].homemobile_ = this.homemobile;

    this.studentinformation[this.selectedrecord].tenschool_ = this.tenschool;
    this.studentinformation[this.selectedrecord].tenpercentage_ = this.tenpercentage;
    this.studentinformation[this.selectedrecord].tenmath_ = this.tenmath;
    this.studentinformation[this.selectedrecord].tenscience_ = this.tenscience;
    this.studentinformation[this.selectedrecord].twelveschool_ = this.twelveschool;
    this.studentinformation[this.selectedrecord].twelvepercentage_ = this.twelvepercentage;
    this.studentinformation[this.selectedrecord].twelvephysics_ = this.twelvephysics;
    this.studentinformation[this.selectedrecord].twelvechemistry_ = this.twelvechemistry;
    this.studentinformation[this.selectedrecord].twelvemath_ = this.twelvemath;

    this.studentinformation[this.selectedrecord].course_ = this.course;
    this.studentinformation[this.selectedrecord].branch_ = this.branch;

    this.studentinformation[this.selectedrecord].bankname_ = this.bankname;
    this.studentinformation[this.selectedrecord].bankaccountno_ = this.bankaccountno;
    this.studentinformation[this.selectedrecord].aadharno_ = this.aadharno;

    this.selectedrecord = null;

    this.studentname = "";
    this.dob = "";
    this.gender = "";
    this.hobby = "";
    this.address = "";
    this.email = "";
    this.studentmobile = "";

    this.fathername = "";
    this.mothername = "";
    this.homemobile = "";

    this.tenschool = "";
    this.tenpercentage = "";
    this.tenmath = "";
    this.tenscience = "";

    this.twelveschool = "";
    this.twelvepercentage = "";
    this.twelvephysics = "";
    this.twelvechemistry = "";
    this.twelvemath = "";

    this.course = "";
    this.branch = "";

    this.bankname = "";
    this.bankaccountno = "";
    this.aadharno = "";
  }

  showDetail(i) {
    this.showBtn = false;
    this.show = false;
    
    
    this.studentname = this.studentinformation[i].studentname_;
    this.dob  = this.studentinformation[i].dob_ ;
    this.gender  = this.studentinformation[i].gender_ ;
    this.hobby  = this.studentinformation[i].hobby_ ;
    this.address  = this.studentinformation[i].address_ ;
    this.email  = this.studentinformation[i].email_ ;
    this.studentmobile  = this.studentinformation[i].studentmobile_ ;

    this.fathername  = this.studentinformation[i].fathername_ ;
    this.mothername  = this.studentinformation[i].mothername_ ;
    this.homemobile  = this.studentinformation[i].homemobile_ ;

    this.tenschool  = this.studentinformation[i].tenschool_ ;
    this.tenpercentage  = this.studentinformation[i].tenpercentage_ ;
    this.tenmath  = this.studentinformation[i].tenmath_ ;
    this.tenscience  = this.studentinformation[i].tenscience_ ;
    this.twelveschool  = this.studentinformation[i].twelveschool_ ;
    this.twelvepercentage  = this.studentinformation[i].twelvepercentage_ ;
    this.twelvephysics  = this.studentinformation[i].twelvephysics_ ;
    this.twelvechemistry  = this.studentinformation[i].twelvechemistry_ ;
    this.twelvemath  = this.studentinformation[i].twelvemath_ ;

    this.course  = this.studentinformation[i].course_ ;
    this.branch  = this.studentinformation[i].branch_ ;

    this.bankname  = this.studentinformation[i].bankname_ ;
    this.bankaccountno  = this.studentinformation[i].bankaccountno_ ;
    this.aadharno  = this.studentinformation[i].aadharno_ ;

    this.studentname = "";
    this.dob = "";
    this.gender = "";
    this.hobby = "";
    this.address = "";
    this.email = "";
    this.studentmobile = "";

    this.fathername = "";
    this.mothername = "";
    this.homemobile = "";

    this.tenschool = "";
    this.tenpercentage = "";
    this.tenmath = "";
    this.tenscience = "";

    this.twelveschool = "";
    this.twelvepercentage = "";
    this.twelvephysics = "";
    this.twelvechemistry = "";
    this.twelvemath = "";

    this.course = "";
    this.branch = "";

    this.bankname = "";
    this.bankaccountno = "";
    this.aadharno = "";

  }

  hideDetail(i) {
    this.showBtn = true;
    this.show = true;
  }

}
