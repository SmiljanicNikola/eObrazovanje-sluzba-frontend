import { Component, OnInit } from '@angular/core';
import { PaymentService } from 'src/app/services/payments/payment.service';
import { Payment } from 'src/app/models/Payment';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/services/accounts/account.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  payments: Payment[] = [];
  accountId : number;
  user: any;

  constructor(private route: ActivatedRoute, private router:Router, private accountService: AccountService, private paymentService: PaymentService, private authService: AuthService) { }

  ngOnInit(): void {

    this.user = this.authService.getToken();

    this.accountId = this.route.snapshot.params['id'];

    this.paymentService.getPaymentsByAccountId(this.accountId)
    .subscribe((payments) => this.payments = payments)
    
  }

}
