import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MyStudent} from '../../students.interface';
import { HttpStudentsService } from '../../services/http-students.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-table-students',
  templateUrl: './table-students.component.html',
  styleUrls: ['./table-students.component.css']
})
export class TableStudentsComponent implements OnInit {

  constructor(private httpStudentsService: HttpStudentsService) {
   
   }
  title = "Студенты";
 
  @Input() students: MyStudent[] = [];
  @Output() deleteStudent = new EventEmitter<number>();
  @Output() editStudent = new EventEmitter();
  
  num = 0;
  studentId : number;
  name: string;
  surname: string;
  group: string;
  patronymic: string;
  phone: string;
  email:string;
  birth: string;
  course: string;
  formChange: FormGroup;

  ngOnInit(): void {
  this.formChange = new FormGroup({
      name: new FormControl(null,[Validators.required]),
      surname: new FormControl(null,[Validators.required]),
      patronymic: new FormControl(null,[Validators.required]),
      group: new FormControl(null,[Validators.required]),
      phone: new FormControl(null,[Validators.required]),
      email: new FormControl(null,[Validators.required,Validators.email]),
      birth: new FormControl(null,[Validators.required]),
      course: new FormControl(null,[Validators.required])
    });
    this.getData();
  }
  async getData(){
    try {
      this.students = await this.httpStudentsService.getStudents();
      
    } catch (error) {
      console.log(error);
    }
  }
  onDeleteStudent(id:number){
    this.deleteStudent.emit(id);
  }
  onEditStudent(id:number){

    if (id!=this.studentId){
      this.num = 0;
      this.studentId=id;
    }
      if (this.num == 0){
        this.name = this.students[this.students.findIndex((student) => student.id === id)].name ;
        this.surname = this.students[this.students.findIndex((student)=> student.id === id)].surname;
        this.patronymic = this.students[this.students.findIndex((student)=> student.id === id)].patronymic;
        this.phone = this.students[this.students.findIndex((student) => student.id === id)].phone;
        this.email = this.students[this.students.findIndex((student) => student.id === id)].email;
        this.course = this.students[this.students.findIndex((student) => student.id === id)].course;
        this.group = this.students[this.students.findIndex((student) => student.id === id)].group;
        this.birth = this.students[this.students.findIndex((student) => student.id === id)].birth;
        this.num += 1;
      }
     else if(this.num == 1){
      let push=this.formChange.value;
      push.id = id;
      this.editStudent.emit(push);
      this.studentId = null;
     }
   }
}
