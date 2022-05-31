import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {environment} from '../../../environments/environment'
import { Departments } from 'src/app/models/Departments';


const createHeader = {
  headers: new HttpHeaders({
    'method':'POST',
    'Content-Type': 'application/json',
  }),
};

const uploadHeader = {
  headers: new HttpHeaders({
    'method':'PUT',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  private apiDepartmentsUrl = `${environment.apiURL}/api/departments`;

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Departments[]>{
    return this.http.get<Departments[]>(this.apiDepartmentsUrl);
  }

  getDepartmentById(id:number): Observable<any>{
    return this.http.get(`${this.apiDepartmentsUrl}/${id}`);
    
  }

  updateDepartment(id:number,departments: Departments) : Observable<Departments>{
    return this.http.put<Departments>(`${this.apiDepartmentsUrl}/${id}`, JSON.stringify(departments),uploadHeader);

  }

  createDepartment(departments: Departments) : Observable<Departments>{
    return this.http.post<Departments>(this.apiDepartmentsUrl, departments, createHeader);
  }

  blockDepartment(id:any) : Observable<any>{
    console.log("bravo + ", id);
    return this.http.delete<Departments>(`${this.apiDepartmentsUrl}/${id}`);
  }
}
