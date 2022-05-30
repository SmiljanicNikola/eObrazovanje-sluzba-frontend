import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SubjectPerformance } from 'src/app/models/SubjectPerformance';
import { environment } from 'src/environments/environment';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

const headers2 = {
  headers: new HttpHeaders({
    'method':'PUT',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class SubjectPerformanceService {

  private apiSubjectPerformanceUrl = `${environment.apiURL}/api/subject-performance`;

  constructor(private http:HttpClient) { }

  getSubjectPerfomances(): Observable<SubjectPerformance[]>{
    return this.http.get<SubjectPerformance[]>(this.apiSubjectPerformanceUrl);
  }

  getSubjectPerformanceById(id:number):Observable<any>{
    return this.http.get(`${this.apiSubjectPerformanceUrl}/${id}`);

  }
}
