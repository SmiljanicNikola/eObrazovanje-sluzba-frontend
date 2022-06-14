import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Account } from 'src/app/models/Account';
import { Departments } from 'src/app/models/Departments';
import { Payment } from 'src/app/models/Payment';
import { AccountService } from 'src/app/services/accounts/account.service';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { PaymentService } from 'src/app/services/payments/payment.service';

@Component({
  selector: 'app-create-payment',
  templateUrl: './create-payment.component.html',
  styleUrls: ['./create-payment.component.css']
})
export class CreatePaymentComponent implements OnInit {

  id:number;
  payment: Payment;
  account: Account;
  accounts$: Observable<Account[]>;
  option: any;

  constructor(private route: ActivatedRoute, private router: Router, private paymentService: PaymentService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.payment = new Payment();
    this.id = this.route.snapshot.params['id'];
    this.accounts$ = this.accountService.getAccounts();
    console.log(this.accounts$);
  }
  redirectToPayments(){
    this.router.navigate(['/payments']);
  }

  createPayment(){
    this.paymentService.createPayment(this.payment).subscribe(data=>{
      console.log(data);
      this.payment = new Payment();
      console.log(this.payment);
      this.redirectToPayments();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.createPayment();
  }

  onChange(option: any) {
    this.option = option;
  }
}
