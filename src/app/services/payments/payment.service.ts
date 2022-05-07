import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { Payment } from 'src/app/models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private apiPaymentsUrl = 'http://localhost:8080/api/payments';

  constructor(private http: HttpClient, private authService: AuthService) { }

  user = this.authService.getToken()

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.user.token}`
    }),
  };

  getPayments(): Observable<Payment[]>{
    return this.http.get<Payment[]>(this.apiPaymentsUrl, this.httpOptions);
  }

}
