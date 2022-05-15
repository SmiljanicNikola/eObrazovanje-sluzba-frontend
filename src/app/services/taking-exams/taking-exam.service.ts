import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TakingExam } from 'src/app/models/TakingExam';
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

}
