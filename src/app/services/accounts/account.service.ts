import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Account[]>{
    return this.http.get<Account[]>(this.apiAccountsUrl);
  }

  getAccountByStudentId(studentId:number): Observable<any>{
    return this.http.get(`${this.apiAccountsUrl}/student/${studentId}`);
  }

}
