import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Student } from 'src/app/models/Student';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiStudentsUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient, private authService:AuthService) { }

  user = this.authService.getToken()


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  httpOptions2 = {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.user.token}`
    }),
  };
  
  getStudents(): Observable<Student[]>{
    return this.http.get<Student[]>(this.apiStudentsUrl,this.httpOptions);
  }

  uploadStudents(data: FormData){
    return this.http.post<any>(`${this.apiStudentsUrl}/upload`,data,this.httpOptions2)
  }

  deleteStudent(id: any): Observable<any>{
    console.log(`http://localhost:8080/api/students/${id}`)
    return this.http.delete(`${this.apiStudentsUrl}/${id}`, this.httpOptions);
    //return this.http.delete(this.apiStudentsUrl+"/"+id, this.httpOptions);

  }

  getStudentById(id:number): Observable<any>{
    return this.http.get(`${this.apiStudentsUrl}/${id}`, this.httpOptions);
    
  }

  
}
