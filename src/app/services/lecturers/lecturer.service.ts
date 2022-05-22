import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Lecturer } from 'src/app/models/Lecturer';
import {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class LecturerService {

  private apiUrl = `${environment.apiURL}/api/lecturers`;

  constructor(private http: HttpClient) { }

  getLecturers(): Observable<Lecturer[]>{
    return this.http.get<Lecturer[]>(this.apiUrl)
  }

  getLecturerByUsername(username: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/username/${username}`);
  }
}
