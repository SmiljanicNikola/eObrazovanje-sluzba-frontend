import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/models/Student';
import { StudentService } from 'src/app/services/student/student.service';

@Component({
  selector: 'app-create-students',
  templateUrl: './create-students.component.html',
  styleUrls: ['./create-students.component.css']
})
export class CreateStudentsComponent implements OnInit {


  id:number;
  student: Student;
  constructor(private route: ActivatedRoute, private router: Router, private studentService: StudentService ) { }

  ngOnInit(): void {
    this.student = new Student();
  }

  redirectToListOfAllStudents(){
    this.router.navigate(['/studenti']);
  }
  createStudent(){
    this.studentService.createStudent(this.student).subscribe(data=>{
      console.log(data);
      this.student = new Student();
      console.log(this.student);
      this.redirectToListOfAllStudents();
    },
    error=>console.log(error));
  }
  onSubmit(){
    this.createStudent();
  }

}
