import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'src/app/models/Subject';
import {environment} from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private apiUrl = `${environment.apiURL}/api/subjects`;

  constructor(private http: HttpClient) { }


  getSubjcts(): Observable<Subject[]>{
    return this.http.get<Subject[]>(this.apiUrl)
  }
}

