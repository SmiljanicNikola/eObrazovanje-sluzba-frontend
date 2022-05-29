import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {environment} from '../../../environments/environment'
import { Student } from 'src/app/models/Student';

const createHeader = {
  headers: new HttpHeaders({
    'method':'POST',
    'Content-Type': 'application/json',
  }),
};


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

  createStudent(student: Student) : Observable<Student>{
    return this.http.post<Student>(this.apiStudentsUrl, student, createHeader);
  }

  
}

