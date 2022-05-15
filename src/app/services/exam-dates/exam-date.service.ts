import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamDate } from 'src/app/models/ExamDate';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ExamDateService {

  private apiExamDatesUrl = `${environment.apiURL}/api/examDates`;

  constructor(private http: HttpClient) { }

  getExamDates():Observable<ExamDate[]>{
    return this.http.get<ExamDate[]>(this.apiExamDatesUrl);
  }

  getStudentById(id:number): Observable<any>{
    return this.http.get(`${this.apiExamDatesUrl}/${id}`);
    
  }


}
