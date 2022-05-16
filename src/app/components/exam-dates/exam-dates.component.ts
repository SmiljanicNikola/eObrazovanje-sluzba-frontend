import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamDate } from 'src/app/models/ExamDate';
import { Student } from 'src/app/models/Student';
import { TakingExam, TakingExam2, TakingExamRequest } from 'src/app/models/TakingExam';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';
import { StudentService } from 'src/app/services/student/student.service';
import { TakingExamService } from 'src/app/services/taking-exams/taking-exam.service';

@Component({
  selector: 'app-exam-dates',
  templateUrl: './exam-dates.component.html',
  styleUrls: ['./exam-dates.component.css']
})
export class ExamDatesComponent implements OnInit {

  examDates: ExamDate[] = [];
  examDate: ExamDate;
  user: any;
  student: any;
  takingExam = new TakingExamRequest;

  constructor(private examDateService: ExamDateService, private router:Router, private authService: AuthService, private takingExamService:TakingExamService, private studentService: StudentService) { }

  ngOnInit(): void {

    this.user = this.authService.getToken();

    this.student = this.studentService.getStudentByUsername(this.user.username);

    
    this.examDateService.getExamDates().subscribe((examDates) => this.examDates = examDates)
  }

  takeExam(id:number, user:any, lecturer:any, attendingCourses:any ){
    console.log(id);
    console.log(lecturer);
    console.log(attendingCourses);

    console.log(this.studentService.getStudentByUsername(user.username));

    this.takingExam = {
      grade:0,
      passed:false,
      lecturerId:lecturer.lecturer_Id,
      attendingCoursesId:attendingCourses.attending_courses_id,
      deleted:false
    }
    this.takingExamService.createTakingExam(this.takingExam);
    
    console.log(this.takingExam);
    
  }

}
