import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/Account';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiAccountsUrl = `${environment.apiURL}/api/accounts`;

  id:number;
  account: Account;

  constructor(private http: HttpClient, private authService:AuthService) { }

  user= this.authService.getToken()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  getStudents(): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiAccountsUrl,this.httpOptions);
  }

  getAccountByStudentId(studentId:number): Observable<any>{
    return this.http.get(`${this.apiAccountsUrl}/student/${studentId}`, this.httpOptions)
  }

}
