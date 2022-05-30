import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturer } from 'src/app/models/Lecturer';
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
export class LecturerService {

  private apiLecturerUrl = `${environment.apiURL}/api/lecturers`;
  addLecturer: any;

  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]>{
    return this.http.get<Lecturer[]>(this.apiLecturerUrl)
  }

  getLecturerByUsername(username: string): Observable<any>{
    return this.http.get(`${this.apiLecturerUrl}/username/${username}`);
  }

  getLecturerById(id: number): Observable<any>{
    return this.http.get(`${this.apiLecturerUrl}/${id}`);
  }

  deleteLecturer(id: any): Observable<any>{
    return this.http.delete(`${this.apiLecturerUrl}/${id}`);
  }

  createLecturer(lecturer:Lecturer) : Observable<Lecturer>{
    return this.http.post<Lecturer>(this.apiLecturerUrl, lecturer, createHeader)
  }

  /*updateLecturer(id:number,lecturers: Lecturer) : Observable<Lecturer>{
    return this.http.put<Lecturer>(`${this.apiLecturerUrl}/${id}`, JSON.stringify(lecturers),uploadHeader);

  }*/

  updateLecturer(lecturer: any): Observable<Lecturer>{
    return this.http.put<Lecturer>(`${this.apiLecturerUrl}/${lecturer.id}`,lecturer)
  }
}