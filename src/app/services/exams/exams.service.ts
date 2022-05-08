import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsService {

  private apiExamsUrl = 'http://localhost:8080/api/attendingCourses/student/';

  constructor(private http: HttpClient, private authService:AuthService) { }

  user = this.authService.getToken()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  getExams(id: string): Observable<any[]>{
    console.log(this.user);
    return this.http.get<any[]>(this.apiExamsUrl + id,this.httpOptions);
  }
}
 