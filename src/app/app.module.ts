import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { InfoComponent } from './info/info.component';
import { FormsComponent } from './forms/forms.component';
import { ListComponent } from './list/list.component';
import { CrudComponent } from './crud/crud.component';
import { DetailComponent } from './detail/detail.component';
import { DatatableComponent } from './datatable/datatable.component';
import { ViewComponent } from './view/view.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HttpClientModule } from '@angular/common/http';
import { FacultyDetailComponent } from './faculty-detail/faculty-detail.component';
import { FacultyFormComponent } from './faculty-form/faculty-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    InfoComponent,
    FormsComponent,
    ListComponent,
    CrudComponent,
    DetailComponent,
    DatatableComponent,
    ViewComponent,
    FacultyComponent,
    FacultyDetailComponent,
    FacultyFormComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
