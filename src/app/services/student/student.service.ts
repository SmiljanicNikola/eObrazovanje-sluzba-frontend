import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiStudentsUrl = `${environment.apiURL}/api/students`;

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiStudentsUrl);
  }

  uploadStudents(data: FormData){
    return this.http.post<any>(`${this.apiStudentsUrl}/upload`,data)
  }

  deleteStudent(id: any): Observable<any>{
    return this.http.delete(`${this.apiStudentsUrl}/${id}`);
  }

  getStudentById(id:number): Observable<any>{
    return this.http.get(`${this.apiStudentsUrl}/${id}`);
    
  }
  getStudentByUsername(username: string): Observable<any>{
    return this.http.get(`${this.apiStudentsUrl}/username/${username}`);
  }

  
}
