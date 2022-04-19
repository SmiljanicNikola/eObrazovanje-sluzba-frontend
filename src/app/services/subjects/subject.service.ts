import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/interfaces/Subject';
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl = 'http://localhost:8080/api/subjects';

  constructor(private http: HttpClient, private authService:AuthService) { }

  user = this.authService.getToken()
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  getSubjcts(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiUrl,this.httpOptions)
  }
}

