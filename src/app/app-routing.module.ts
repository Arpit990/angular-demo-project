import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { CrudComponent } from './crud/crud.component';
import { DetailComponent } from './detail/detail.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ViewComponent } from './view/view.component';
import { FacultyComponent } from './faculty/faculty.component';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'link',component:InfoComponent},
  {path:'form',component:FormsComponent},
  {path:'list',component:ListComponent},
  {path:'crud',component:CrudComponent},
  {path:'detail',component:DetailComponent},
  {path:'view',component:ViewComponent},
  {path:'datatable',component:DatatableComponent},
  {path:'faculty',component:FacultyComponent},
  {path:'facultydetail/:id',component:FacultyDetailComponent},
  {path:'faculty/add',component:FacultyFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
