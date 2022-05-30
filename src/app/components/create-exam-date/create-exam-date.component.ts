import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ExamDate } from 'src/app/models/ExamDate';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';

@Component({
  selector: 'app-create-exam-date',
  templateUrl: './create-exam-date.component.html',
  styleUrls: ['./create-exam-date.component.css']
})
export class CreateExamDateComponent implements OnInit {

  examDate:ExamDate;

  constructor(private route: ActivatedRoute, private router: Router, private examDateService: ExamDateService) { }

  ngOnInit(): void {
    this.examDate = new ExamDate();

  }

  addExamDate(){
    this.examDateService.createExamDate(this.examDate).subscribe(data=>{
      console.log(data);
      this.examDate = new ExamDate();
    },
    error=>console.log(error));
  }

  onSubmit(){
    this.addExamDate();
  }

}
