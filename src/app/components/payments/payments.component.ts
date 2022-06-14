import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payments/payment.service';
import { Payment } from 'src/app/models/Payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  payments: Payment[] = [];

  constructor(private paymentService: PaymentService, private router:Router) { }

  ngOnInit(): void {
    this. paymentService.getPayments().subscribe((payments) => this.payments = payments);
  }

  public addPayment() {
    this.router.navigate(['createPayment']);
  }

}
