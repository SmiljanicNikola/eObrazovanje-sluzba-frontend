import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamDate } from 'src/app/models/ExamDate';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';


const createHeader = {
  headers: new HttpHeaders({
    'method':'POST',
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root'
})
export class ExamDateService {

  private apiExamDatesUrl = `${environment.apiURL}/api/examDates`;

  constructor(private http: HttpClient) { }

  getExamDates():Observable<ExamDate[]>{
    return this.http.get<ExamDate[]>(this.apiExamDatesUrl);
  }

  getExamDateById(id:number): Observable<any>{
    return this.http.get(`${this.apiExamDatesUrl}/${id}`);
  }

  createExamDate(examDate: ExamDate) : Observable<ExamDate>{
    return this.http.post<ExamDate>(this.apiExamDatesUrl, examDate, createHeader);
  }

  deleteExamDate(id: any): Observable<any>{
    return this.http.delete(`${this.apiExamDatesUrl}/${id}`);
  }


}
