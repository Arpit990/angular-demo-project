import { Component, OnInit } from '@angular/core';
import { ApiFacultiesService } from '../api-faculties.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-form',
  templateUrl: './faculty-form.component.html',
  styleUrls: ['./faculty-form.component.css']
})
export class FacultyFormComponent implements OnInit {

  constructor(private _api:ApiFacultiesService, private _router:Router) { }
  
  ngOnInit(): void {
  }

  addRecord(form) {
    var a = this._api.insert(form);
    a.subscribe(
      (res:any) => this._router.navigate(['./faculty'])
    );
  }

}
