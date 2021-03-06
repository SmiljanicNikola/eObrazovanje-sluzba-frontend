import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Account } from 'src/app/models/Account';
import { Student } from 'src/app/models/Student';
import { AccountService } from 'src/app/services/accounts/account.service';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {

  id:number;
  student: Student;
  account: Account;

  constructor(private route: ActivatedRoute, private router:Router, private studentService: StudentService, private accountService: AccountService) { }

  ngOnInit(): void {
    this.student = new Student()

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(
    {
      next: data => this.student = data , 
      error: error => console.log(error)
    }
    );
  }
  list(){
    this.router.navigate(['studenti']);
  }
  
  checkBank(id:number){
    this.accountService.getAccountByStudentId(id).subscribe((account)=> this.account = account);
    this.router.navigate(['bankAccountDetails', id]);
  }
}
