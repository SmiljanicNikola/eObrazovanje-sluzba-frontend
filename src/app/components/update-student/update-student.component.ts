import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { User } from 'src/app/models/User';
import { StudentService } from 'src/app/services/student/student.service';
import { UserService } from 'src/app/services/users/user.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id:number;
  student: Student;
  user: User;

  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService, private userService: UserService) { }

  ngOnInit(): void {
    this.student = new Student();

    this.id = this.route.snapshot.params['id'];

    this.studentService.getStudentById(this.id).subscribe(data=>{
      console.log(data)
      this.student = data
    }, error=> console.log(error));
  }

  updateStudent(id:number, student:Student){
    this.studentService.updateStudent(id, student).subscribe(data=>{
      this.student = data;
      this.redirectToListOfAllStudent();
    }, error=>console.log(error));

    this.userService.getUserByUsername(student.username).subscribe(data=> {
      this.user = data;
    }, error=> console.log(error));

    const obj: User = {
      user_id: this.user.user_id,
      username: student.username,
      name: student.firstname,
      surname: student.lastname,
      indexNumber: student.indexNumber,
      jmbg: student.jmbg,
      address: student.adress,
      blocked: false
    };

    this.userService.updateUser(this.user.user_id, obj).subscribe(data =>{
      this.user = data;
    }, error=>console.log(error));
  }
  onSubmit(){
    //this.updateStudent();
  }

  redirectToListOfAllStudent(){
    this.router.navigate(['/studenti']);
  }

}
