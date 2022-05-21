import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ExamsService {
 
  private apiExamsUrl = `${environment.apiURL}/api/attendingCourses/student/`;
  private apiExamsTakedUrl = `${environment.apiURL}/api/attendingCourses`

  constructor(private http: HttpClient) { }

  getExams(id: string): Observable<any[]>{
    return this.http.get<any[]>(this.apiExamsUrl + id);
  }

  getUntakedExams(): Observable<any[]>{
    return this.http.get<any[]>(this.apiExamsTakedUrl);
  }
}
 