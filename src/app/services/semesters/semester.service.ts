import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Semester } from 'src/app/models/Semester';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import {environment} from '../../../environments/environment'


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

export class SemesterService {

  private apiSemestersUrl = `${environment.apiURL}/api/semester`;

  constructor(private http: HttpClient) { }

  getSemesters(): Observable<Semester[]>{
    return this.http.get<Semester[]>(this.apiSemestersUrl);
  }
  
  updateSemester(id:number,semesters: Semester) : Observable<Semester>{
    return this.http.put<Semester>(`${this.apiSemestersUrl}/${id}`, JSON.stringify(semesters),uploadHeader);

  }

  createSemester(semesters: Semester) : Observable<Semester>{
    return this.http.post<Semester>(this.apiSemestersUrl, semesters, createHeader);
  }

  getSemesterById(id:number): Observable<any>{
    return this.http.get(`${this.apiSemestersUrl}/${id}`);
    
  }

  blockSemester(id:any) : Observable<any>{
    console.log("bravo + ", id);
    return this.http.delete<Semester>(`${this.apiSemestersUrl}/${id}`);
  }
}
