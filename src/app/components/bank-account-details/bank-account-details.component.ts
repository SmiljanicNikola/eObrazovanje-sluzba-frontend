import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { AccountService } from 'src/app/services/accounts/account.service';


@Component({
  selector: 'app-bank-account-details',
  templateUrl: './bank-account-details.component.html',
  styleUrls: ['./bank-account-details.component.css']
})
export class BankAccountDetailsComponent implements OnInit {

  accountId:number;
  account: Account;

  constructor(private route: ActivatedRoute, private router:Router, private accountService: AccountService) { }

  ngOnInit(): void {
    this.account = new Account()

    this.accountId = this.route.snapshot.params['id'];

    this.accountService.getAccountByStudentId(this.accountId).subscribe(data =>{
      console.log(data)
      this.account = data
    }, error=> console.log(error));
  }
  


  }



