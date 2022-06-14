import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LecturerOnTheSubjectService {

  private apiLecturersUrl = `${environment.apiURL}/api/lecturersOnTheSubject`

  constructor(private http: HttpClient) { }

  getExams(id: string): any{
    return this.http.get<any>(`${this.apiLecturersUrl}/${id}`);
  }
}
