import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeOfRequirement } from 'src/app/models/TypeOfRequirement';
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
export class TypeOfRequirementService {

  private apiTypeUrl = `${environment.apiURL}/api/typeOfRequirements`;

  constructor(private http:HttpClient) { }

  getAll(): Observable<TypeOfRequirement[]>{
    return this.http.get<TypeOfRequirement[]>(this.apiTypeUrl);
  }

  getById(id:number):Observable<any>{
    return this.http.get(`${this.apiTypeUrl}/${id}`);

  }
}
