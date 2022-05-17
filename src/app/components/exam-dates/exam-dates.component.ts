import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendingCourse } from 'src/app/models/AttendingCourse';
import { ExamDate } from 'src/app/models/ExamDate';
import { Lecturer } from 'src/app/models/Lecturer';
import { TakingExamm, TakingExamRequest } from 'src/app/models/TakingExam';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';
import { TakingExamService } from 'src/app/services/taking-exams/taking-exam.service';

@Component({
  selector: 'app-exam-dates',
  templateUrl: './exam-dates.component.html',
  styleUrls: ['./exam-dates.component.css']
})
export class ExamDatesComponent implements OnInit {

  examDates: ExamDate[] = [];
  examDate: ExamDate;
  takingExam = new TakingExamRequest;

  constructor(private examDateService: ExamDateService, private takingExamService:TakingExamService) { }

  ngOnInit(): void {
    this.examDateService.getExamDates().subscribe((examDates) => this.examDates = examDates)
  }

  takeExam(lecturer:Lecturer, attendingCourses:AttendingCourse ){

    let obj:TakingExamm = {
      grade:0,
      passed:false,
      lecturerId:lecturer.lecturer_Id,
      attendingCoursesId:attendingCourses.attending_courses_id,
      deleted:false
    }

    this.takingExamService.createTakingExam(obj).subscribe((value)=>console.log(value));
  }

}
