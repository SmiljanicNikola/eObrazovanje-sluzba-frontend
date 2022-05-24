import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiAdminsUrl = `${environment.apiURL}/api/admins`;

  constructor(private http: HttpClient) { }


  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiAdminsUrl);
  }

  deleteAdmin(id: any): Observable<any>{
    return this.http.delete(`${this.apiAdminsUrl}/${id}`);
  }

  getAdminById(id:number): Observable<any>{
    return this.http.get(`${this.apiAdminsUrl}/${id}`);
    
  }
}
