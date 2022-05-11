import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { Observable } from 'rxjs';
import { Lecturer } from 'src/app/models/Lecturer';
import { AuthService } from '../auth/auth.service';
import {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  private apiUrl = `${environment.apiURL}/api/lecturers`;

  constructor(private http: HttpClient, private authService:AuthService) { }

  user = this.authService.getToken()
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  getLecturers(): Observable<Lecturer[]>{
    return this.http.get<Lecturer[]>(this.apiUrl,this.httpOptions)
  }
}
