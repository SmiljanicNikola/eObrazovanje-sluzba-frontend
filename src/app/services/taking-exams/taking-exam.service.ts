import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakingExam, TakingExam2, TakingExamm, TakingExamRequest } from 'src/app/models/TakingExam';
import { environment } from 'src/environments/environment';

const headers = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

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

  createTakingExam(takingExam: TakingExamm) : Observable<TakingExamm>{
    return this.http.post<TakingExamm>(this.apiTakingExamsUrl, takingExam, headers);
  }


}
