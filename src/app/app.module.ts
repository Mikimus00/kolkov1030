import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { InfoComponent } from './info/info.component';
import { StudentsComponent } from './students/students.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { TableStudentsComponent } from './shared/components/table-students/table-students.component';
import { AddformStudentComponent } from './shared/components/addform-student/addform-student.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    StudentsComponent,
    HeaderComponent,
    TableStudentsComponent,
    AddformStudentComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
