import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semester } from 'src/app/models/Semester';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SemesterService {

  private apiStudentsUrl = `${environment.apiURL}/api/semester`;

  constructor(private http: HttpClient, private authService:AuthService) { }

  user = this.authService.getToken()


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };
  
  getSemesters(): Observable<Semester[]>{
    return this.http.get<Semester[]>(this.apiStudentsUrl,this.httpOptions);
  }
  
}
