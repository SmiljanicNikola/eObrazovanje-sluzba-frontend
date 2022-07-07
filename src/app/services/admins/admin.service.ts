import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from 'src/app/models/Admin';
import { AdminDTO } from 'src/app/models/DTO/AdminDTO';
import { environment } from 'src/environments/environment';

const uploadHeader = {
  headers: new HttpHeaders({
    'method':'PUT',
    'Content-Type': 'application/json',
  }),
};

const createHeader = {
  headers: new HttpHeaders({
    'method':'POST',
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiAdminsUrl = `${environment.apiURL}/api/admins`;

  constructor(private http: HttpClient) { }
  getAdmins(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiAdminsUrl);
  }

  getAdmin(): Observable<Admin[]>{
    return this.http.get<Admin[]>(this.apiAdminsUrl);
  }

  deleteAdmin(id: any): Observable<any>{
    return this.http.delete(`${this.apiAdminsUrl}/${id}`);
  }

  getAdminById(id: number): Observable<any>{
    return this.http.get(`${this.apiAdminsUrl}/${id}`);
  }

  createAdmin(admin: Admin) : Observable<Admin>{
    return this.http.post<Admin>(this.apiAdminsUrl, admin, createHeader);
  }

  updateAdmin(lecturer: AdminDTO): Observable<Admin>{
    return this.http.put<Admin>(`${this.apiAdminsUrl}/${lecturer.id}`,lecturer)
  }
}
