import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Groups, MyStudent } from '../../students.interface';

@Component({
  selector: 'app-addform-student',
  templateUrl: './addform-student.component.html',
  styleUrls: ['./addform-student.component.css']
})
export class AddformStudentComponent implements OnInit {

  constructor() { }
  title = "Добавить студента";

  @Output() addStudent = new EventEmitter<MyStudent>();

  name: string;
  surname: string;
  group: string;
  patronymic: string;
  phone: string;
  email:string;
  birth: string;
  course: string;

  typeGroup: typeof Groups;
  StudentForm: FormGroup;

  student: MyStudent;

  ngOnInit(): void {
    this.StudentForm = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      surname: new FormControl(null,[Validators.required]),
      patronymic: new FormControl(null,[Validators.required]),
      group: new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      birth: new FormControl(null,[Validators.required]),
      course: new FormControl(null,[Validators.required])
    });
  }
  

  onAddStudent(){
    this.student = this.StudentForm.value;
    this.addStudent.emit(this.student);
    console.log(this.student);
  }
}
