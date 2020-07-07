import { Component, OnInit } from '@angular/core';
import { MyStudent, Groups } from '../shared/students.interface';
import { HttpStudentsService } from '../shared/services/http-students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private httpStudentsService: HttpStudentsService) { }

  students: MyStudent[] = [];
  studentGroups = Groups;
  filterGroup:FormGroup;

  ngOnInit(): void {
    this.getData();
    this.filterGroup = new FormGroup({
      group: new FormControl(null,[Validators.required]),
      course:new FormControl(null,[Validators.required])
    });
  }




  async getData(){
    try {
      this.students = await this.httpStudentsService.getStudents();
      
    } catch (error) {
      console.log(error);
    }
  }
  async onAddStudent(student: MyStudent){
    try {
      let id = this.students.length > 0 ? this.students[this.students.length - 1].id + 1 :  0;
      student.id = id;
      await this.httpStudentsService.postStudents(student);
      this.getData();
      
    } catch (error) {
      console.log(error);
    } finally{
      this.getData();
    }
  }
  async onEditStudent(student){

    try {
      await this.httpStudentsService.editStudent(student);
      this.getData();
    } catch (error) {
      console.log(error);
    } finally{this.getData();}
  }
  async onDeleteStudent(id: number){
    try {
      await this.httpStudentsService.deleteStudent(id);
      this.getData();
    } catch (error) {
      console.log(error);
    }finally {this.getData();}
  }
}
