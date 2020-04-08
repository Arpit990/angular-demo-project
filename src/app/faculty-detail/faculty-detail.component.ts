import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiFacultiesService } from '../api-faculties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-detail',
  templateUrl: './faculty-detail.component.html',
  styleUrls: ['./faculty-detail.component.css']
})
export class FacultyDetailComponent implements OnInit {

  constructor(private _activatedRoute : ActivatedRoute, private _api : ApiFacultiesService, private _router : Router) { }

  id = null;
  facu = {
    FacultyID:"",
    FacultyName:"",
    FacultyDesignation:"",
    FacultyHighestEducation:"",
    FacultyExperienceInYears:"",
    FacultyWorkingSince:"",
    FacultyMobileNumber:"",
    FacultyEmailAddress:"",
    FacultySeating:"",
    FacultyProfileDescription:"",
    FacultyAreaSpecialization:"",
    FacultySubjectsTaught:"",
    FacultyImage:"",
    FacultyDepartmentID:"",
    FacultySequence:""
  };

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');

    let a = this._api.getFacultyById(this.id);

    a.subscribe(
      (res:any) => this.facu = res
    );
  }

  deleterFaculty() {
    this._api.deleteFaculty(this.id).subscribe(
      (res:any) => this._router.navigate(['./faculty']) 
    );
  }
}
