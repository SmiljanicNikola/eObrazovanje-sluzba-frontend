import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/User';
import { StudentService } from 'src/app/services/student/student.service';
import { Student, StudentForUpdateProfile } from 'src/app/models/Student';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id:number;
  user: User;
  student: Student;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router:Router, private userService: UserService, private studentService: StudentService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data=>{
      this.user = data
    }, error=> console.log(error));
    
  }

  updateUser(id:number, user:User){
    this.userService.updateUser(id, user).subscribe(data =>{
      this.user = data;
    }, error=>console.log(error));

    this.studentService.getStudentByUsername(user.username).subscribe(data=> {
      this.student = data;
    }, error=> console.log(error));

    const obj: StudentForUpdateProfile = {
      student_id: this.student.student_id,
      username: user.username,
      firstname: user.name,
      lastname: user.surname,
      indexNumber: user.indexNumber,
      jmbg: user.jmbg,
      adress: user.address,
    };

    this.studentService.updateStudent2(this.student.student_id, obj).subscribe(data=>{
      console.log(data);
    }, error=>console.log(error));
  }

  onSubmit(){
    
  }

}
