import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/services/student/student.service';
import { Student } from 'src/app/models/Student';
import { UploadUsersComponent } from '../upload-users/upload-users.component';
import { ThisReceiver } from '@angular/compiler';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  students: Student[] = [];
  student: any;
  role:string;


  constructor(private studentService: StudentService, private router: Router) { }


  ngOnInit(): void {
    const { roles } = JSON.parse(localStorage.getItem('user') || '{}');
    this.role = roles[0];
    this.studentService.getStudents().subscribe((students) => this.students = students)
  }

  public deleteStud(id:number){
    let response = this.studentService.deleteStudent(id);
    response.subscribe((students)=> this.student = students);
  }

  public updateStud(id:number){
    this.router.navigate(['updateStudent', id]);
  }

  public studentDetails(id:number){
    let response = this.studentService.getStudentById(id);
    response.subscribe((student)=> this.student = student)
    console.log(this.student);
    this.router.navigate(['studentDetails', id]);
  }

  public createStudent() {
    this.router.navigate(['addStudent']);
  }
}
