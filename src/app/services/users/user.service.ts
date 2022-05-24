import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUsersUrl = `${environment.apiURL}/api/users`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.apiUsersUrl);
  }

  getUserById(id:number): Observable<any>{
    return this.http.get(`${this.apiUsersUrl}/${id}`);
    
  }
  getUserByUsername(username: string): Observable<any>{
    return this.http.get(`${this.apiUsersUrl}/username/${username}`);
  }

}
