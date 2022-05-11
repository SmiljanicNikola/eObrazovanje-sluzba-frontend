import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiURL}/api/auth/login`;

  constructor(private http: HttpClient) { }

  login(request: LoginRequest) : Observable<LoginRequest>{
    return this.http.post<LoginRequest>(this.apiUrl,  request, httpOptions)
  }

  getToken(){
    let user = JSON.parse(localStorage.getItem('user') || '{}')
    return user
  }

}
