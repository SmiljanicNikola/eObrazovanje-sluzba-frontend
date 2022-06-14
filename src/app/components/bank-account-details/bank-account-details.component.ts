import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { Payment } from 'src/app/models/Payment';
import { AccountService } from 'src/app/services/accounts/account.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PaymentService } from 'src/app/services/payments/payment.service';


@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent implements OnInit {

  accountId:number;
  account: Account;
  user: any;
  payments: Payment[] = [];

  constructor(private route: ActivatedRoute, private router:Router, private accountService: AccountService, private paymentService: PaymentService, private authService: AuthService) { }

  ngOnInit(): void {
    
    this.user = this.authService.getToken()

    this.account = new Account()

    this.accountId = this.route.snapshot.params['id'];

    this.accountService.getAccountByStudentId(this.accountId).subscribe(data =>{
      console.log(data)
      this.account = data
    }, error=> console.log(error));

  }

  checkPaymentHistory(id:number){
    let response = this.paymentService.getPaymentsByAccountId(id);
    response.subscribe((payments)=> this.payments = payments)
    console.log(this.payments);
    this.router.navigate(['paymentHistory', id]);
  }

  public addPayment(id:number) {
    this.router.navigate(['createPayment', id]);
  }
}



