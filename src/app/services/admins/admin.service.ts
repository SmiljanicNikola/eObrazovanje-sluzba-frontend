import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginRequest } from 'src/app/models/LoginRequest';
import { Observable } from 'rxjs';
import { Admin} from "src/app/models/Admin";
import { AuthService } from '../auth/auth.service';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:8080/api/admins';

  constructor(private http: HttpClient, private authService:AuthService) { }

  user = this.authService.getToken()
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiUrl,this.httpOptions)
  }
}

