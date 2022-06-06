import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AttendingCourse } from 'src/app/models/AttendingCourse';
import { environment } from 'src/environments/environment';

const uploadHeader = {
  headers: new HttpHeaders({
    'method':'PUT',
    'Content-Type': 'application/json',
  }),
};

const createHeader = {
  headers: new HttpHeaders({
    'method':'POST',
    'Content-Type': 'application/json',
  }),
};


@Injectable({
  providedIn: 'root'
})
export class AttendingCousreService {

  private attendingUrl = `${environment.apiURL}/api/attendingCourses`;

  constructor(private http: HttpClient) { }



createAttendingCourse(attendingCourse: AttendingCourse) : Observable<AttendingCourse>{
  return this.http.post<AttendingCourse>(this.attendingUrl, attendingCourse, createHeader);
}


deleteAttendingCourse(id: any): Observable<any>{
  return this.http.delete(`${this.attendingUrl}/${id}`);
}

getAttendingCourse(): Observable<AttendingCourse[]>{
  return this.http.get<AttendingCourse[]>(this.attendingUrl);
}

getAttendingCourseById(id:number):Observable<any>{
  return this.http.get(`${this.attendingUrl}/${id}`);

}

getStudentByCourseId(id:number):Observable<any>{
  return this.http.get(`${this.attendingUrl}/students/${id}`);

}

}
