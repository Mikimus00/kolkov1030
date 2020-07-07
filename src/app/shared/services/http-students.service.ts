import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyStudent } from '../students.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpStudentsService {
  routeApi="http://localhost:3000/students";
  constructor(private http: HttpClient) { }

  getStudents(): Promise<any>{
    return this.http.get(this.routeApi).toPromise();
  }
  postStudents(data: MyStudent){
    return this.http.post(this.routeApi,data).toPromise();
  }
  deleteStudent(id: number){
    const api = `${this.routeApi}/${id}`;
    return this.http.delete(api).toPromise();
  }
  editStudent(student: MyStudent){
    console.log(student);
    const api = `${this.routeApi}/${student.id}`;
    console.log(api);
    return this.http.put(api, student).toPromise();
  }
}
