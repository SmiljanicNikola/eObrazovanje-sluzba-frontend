import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student/student.service';
import { AccountService } from 'src/app/services/accounts/account.service';
import { Account } from 'src/app/models/Account';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;
  username: string;
  student: any;
  account: any;
  userReal: User;


  constructor(private authService: AuthService, private route: ActivatedRoute, private router:Router, private studentService: StudentService, private accountService: AccountService, private userService:UserService) { }

  ngOnInit(): void {
    this.user = this.authService.getToken();
    //const { username } = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = this.user.username
    if(this.user.roles == 'LECTURER' || this.user.roles == 'ADMIN'){
    
    this.userService.getUserByUsername(this.username).subscribe((user) => this.userReal = user)
    }
    if(this.user.roles == 'STUDENT'){
    this.student = new Student();
    this.studentService.getStudentByUsername(this.username).subscribe((student) => this.student = student)

    this.accountService.getAccountByStudentId(this.student.student_id).subscribe((acc) => this.account = acc)
    }
  }

  checkBank(id:number){
    this.accountService.getAccountByStudentId(id).subscribe((account)=> this.account = account);
    this.router.navigate(['bankAccountDetails', id]);
  }

  changePassword(id:number){
    console.log(id);
    this.router.navigate(['changePassword', id]);

  }

  changeProfile(id:number){
    console.log(id);
    this.router.navigate(['updateProfile', id]);

  }

}
