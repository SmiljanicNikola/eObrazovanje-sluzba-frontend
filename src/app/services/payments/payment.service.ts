import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Payment } from 'src/app/models/Payment';
import {environment} from '../../../environments/environment'


const createHeader = {
  headers: new HttpHeaders({
    'method':'POST',
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiPaymentsUrl = `${environment.apiURL}/api/payments`;

  constructor(private http: HttpClient) { }

  getPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiPaymentsUrl);
  }

  getPaymentById(id:number): Observable<any>{
    return this.http.get(`${this.apiPaymentsUrl}/${id}`)
  }

  getPaymentsByAccountId(accountId:number): Observable<any>{
    return this.http.get(`${this.apiPaymentsUrl}/account/${accountId}`)
  }

  createPayment(payments: Payment) : Observable<Payment>{
    console.log(payments);
    return this.http.post<Payment>(this.apiPaymentsUrl, payments, createHeader);
  }

}
