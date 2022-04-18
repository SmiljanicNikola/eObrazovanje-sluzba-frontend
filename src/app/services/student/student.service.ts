import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentiResponse } from 'src/app/interfaces/StudentiResponse';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

var t=`eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJtaXJrb20iLCJyb2xlIjp7ImF1dGhvcml0eSI6IkFETUlOIn0sImNyZWF0ZWQiOjE2NTAzMjIzMzk1NDQsImV4cCI6MTY1MDM0MDMzOX0.mPZbmYyiua0gsZfjhKo02NRK2wOuH41C9acj88sBZcetEzf9qnEsW0pg-qLvzo3cCAgMr9rFz7NV8LWLdfyUTA`;

var headers_object = new HttpHeaders();
  headers_object.append('Content-Type', 'application/json');
  headers_object.append("Authorization", "Bearer " + t);

const httpOptions = {
  headers: headers_object
};


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private apiStudentsUrl = 'http://localhost:8080/api/students';

  constructor(private http: HttpClient) { }

  /*getStudents(): Observable<StudentiResponse>{
    return this.http.get(this.apiStudentsUrl, {headers:this.httpOptions});
  }*/

  /*getStudents(){
    this.httpClient.get<any>('http://localhost:8080/api/students').subscribe(
      response =>{
        console.log(response);
        this.student = response;
      }
    )
  };*/
  
  getStudents(){
    return this.http.get(this.apiStudentsUrl,httpOptions);
  }
}
