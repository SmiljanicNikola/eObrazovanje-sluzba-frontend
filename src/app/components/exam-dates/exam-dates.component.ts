import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExamDate } from 'src/app/models/ExamDate';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';

@Component({
  selector: 'app-exam-dates',
  templateUrl: './exam-dates.component.html',
  styleUrls: ['./exam-dates.component.css']
})
export class ExamDatesComponent implements OnInit {

  examDates: ExamDate[] = [];
  examDate: ExamDate;

  constructor(private examDateService: ExamDateService, private router:Router) { }

  ngOnInit(): void {
    this.examDateService.getExamDates().subscribe((examDates) => this.examDates = examDates)
  }

}
