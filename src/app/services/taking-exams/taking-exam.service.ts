import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakingExam, TakingExam2, TakingExamRequest } from 'src/app/models/TakingExam';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TakingExamService {

  private apiTakingExamsUrl = `${environment.apiURL}/api/taking-xams`;

  constructor(private http:HttpClient) { }

  getTakingExams(): Observable<TakingExam[]>{
    return this.http.get<TakingExam[]>(this.apiTakingExamsUrl);
  }

  getTakingExamById(id:number):Observable<any>{
    return this.http.get(`${this.apiTakingExamsUrl}/${id}`);

  }

  createTakingExam(takingExam: TakingExamRequest):Observable<any>{
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(takingExam);
    return this.http.post(`${this.apiTakingExamsUrl}`, body, {headers});
  }

}
