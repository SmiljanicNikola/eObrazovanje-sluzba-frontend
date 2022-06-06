import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PreExaminationDTO } from 'src/app/models/DTO/PreExaminationDTO';
import { PreExaminationObligations } from 'src/app/models/PreExaminationObligations';
import { environment } from 'src/environments/environment';

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
export class PreExamObligationService {

  private apiPreExamUrl = `${environment.apiURL}/api/examinationObligations`;

  constructor(private http: HttpClient) { }


  getPreExamObligation(): Observable<PreExaminationObligations[]>{
    return this.http.get<PreExaminationObligations[]>(this.apiPreExamUrl)
  }

  getPreExamObligationById(id: number): Observable<PreExaminationObligations>{
    return this.http.get<PreExaminationObligations>(`${this.apiPreExamUrl}/${id}`);
  }

  deletePreExamObligation(id: any): Observable<any>{
    return this.http.delete(`${this.apiPreExamUrl}/${id}`);
  }

  addPreExamObligation(preExamObligation:PreExaminationDTO) : Observable<PreExaminationObligations>{
    return this.http.post<PreExaminationObligations>(this.apiPreExamUrl, preExamObligation, createHeader)
  }

  updatePreExamObligation(preExamObligation: PreExaminationDTO): Observable<PreExaminationObligations>{
    return this.http.put<PreExaminationObligations>(`${this.apiPreExamUrl}/${preExamObligation.pre_examination_obligation_id}`,preExamObligation)
  }

  
}
