import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/Payment';
import {environment} from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiPaymentsUrl = `${environment.apiURL}/api/payments`;

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiPaymentsUrl);
  }

  getPaymentsByAccountId(accountId:number): Observable<any>{
    return this.http.get(`${this.apiPaymentsUrl}/account/${accountId}`)
  }

}
