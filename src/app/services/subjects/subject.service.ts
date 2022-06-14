import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/models/Subject';
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
export class SubjectService {

  private apiUrl = `${environment.apiURL}/api/subjects`;

  constructor(private http: HttpClient) { }


  getSubjcts(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiUrl)
  }

  getSubjectById(id:number): Observable<any>{
    return this.http.get(`${this.apiUrl}/${id}`);
    
  }
  getSubjectByName(name: string): Observable<any>{
    return this.http.get(`${this.apiUrl}/name/${name}`);
  }

  updateSubject(id:number,subjects: Subject) : Observable<Subject>{
    return this.http.put<Subject>(`${this.apiUrl}/${id}`, JSON.stringify(subjects),uploadHeader);

  }

  createSubject(subject: Subject) : Observable<Subject>{
    return this.http.post<Subject>(this.apiUrl, subject, createHeader);
  }

}

