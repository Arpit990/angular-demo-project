import { Component, OnInit } from '@angular/core';
import { ApiFacultiesService } from '../api-faculties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private _api:ApiFacultiesService, private _router:Router) { }

  faculties = [];

  ngOnInit(): void {
    let a = this._api.getAllFaculties();
    a.subscribe(
      (data:any) => this.faculties = data.records
    );
  }

  readDetails(id) { 
    this._router.navigate(['./facultydetail/',id]);
  }
}
