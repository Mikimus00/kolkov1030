import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StudentsComponent } from './students/students.component';


const routes: Routes = [
  {
  path: '',
  component:InfoComponent,
},
{
  path:'students',
  component:StudentsComponent,
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
