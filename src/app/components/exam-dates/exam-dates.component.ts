import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendingCourse } from 'src/app/models/AttendingCourse';
import { ExamDate } from 'src/app/models/ExamDate';
import { Lecturer } from 'src/app/models/Lecturer';
import { TakingExamm, TakingExamRequest } from 'src/app/models/TakingExam';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';
import { TakingExamService } from 'src/app/services/taking-exams/taking-exam.service';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-exam-dates',
  templateUrl: './exam-dates.component.html',
  styleUrls: ['./exam-dates.component.css']
})
export class ExamDatesComponent implements OnInit {

  examDates: ExamDate[] = [];
  examDate: ExamDate;
  user: any;
  takingExam = new TakingExamRequest;

  constructor(private examDateService: ExamDateService, private takingExamService:TakingExamService, private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.examDateService.getExamDates().subscribe((examDates) => this.examDates = examDates)

    this.user = this.authService.getToken();
  }

  addExamDate(){
    this.router.navigate(['addExamDate']);
  }

  deleteExamDate(id:number){
    let response = this.examDateService.deleteExamDate(id);
    response.subscribe((examDates)=> this.examDates = examDates);
  }


}
