import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/users/user.service';
import { StudentService } from 'src/app/services/student/student.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User2 } from 'src/app/models/User';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user: User2;
  password: string;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = new User2();
  }

  onSubmit(){
    
  }
  changePassword(id:number, user:User2){
    
  }

}
