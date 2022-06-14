import { Component, OnInit } from '@angular/core';
import { takeUntil, timeout } from 'rxjs';
import { Lecturer } from 'src/app/models/Lecturer';
import { TakingExamm } from 'src/app/models/TakingExam';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';
import { LecturerOnTheSubjectService } from 'src/app/services/lecturerOn-on-the-subject/lecturer-on-the-subject.service';
import { TakingExamService } from 'src/app/services/taking-exams/taking-exam.service';
import { ExamsService } from '../../services/exams/exams.service';

@Component({
  selector: 'app-passed-exams',
  templateUrl: './passed-exams.component.html',
  styleUrls: ['./passed-exams.component.css'],
})
export class PassedExamsComponent implements OnInit {
  exams: any[] = [];
  untakedExams: any[] = [];
  examDates: any[] = [];
  username: string;
  option: any;
  lecturerOnTheSubject: any;

  constructor(
    private examsService: ExamsService,
    private examDateService: ExamDateService,
    private lecturerOnSubjectService:LecturerOnTheSubjectService,
    private takingExamService:TakingExamService
  ) {}

  ngOnInit(): void {
    const { username } = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = username;
    this.examsService.getUntakedExams().subscribe((exams) => {this.untakedExams = exams;});
    this.examsService.getExams(username).subscribe((exams) => (this.exams = exams));
    this.examDateService.getExamDates().subscribe((examDates) => (this.examDates = examDates));
  }

  async findLecturerOnTheSubjects(id:string){
    const data = await this.lecturerOnSubjectService.getExams(id).pipe(timeout(30000)).toPromise()
    return data
  }

  async TakeExam(exam: any){
    const data = this.findLecturerOnTheSubjects(exam.subjectPerformance.subject_performance_id)
    console.log(data);
    await data.then(res => this.lecturerOnTheSubject = res)
 
  
    let obj:TakingExamm = {
      grade:0,
      passed:false,
      lecturerId:this.lecturerOnTheSubject.lecturer.lecturer_Id,
      attendingCoursesId:exam.attending_courses_id,
      deleted:false,
      examDateId:this.option.id
    }

    this.takingExamService.createTakingExam(obj).subscribe((value)=>console.log(value));

  }

  onChange(option: any) {
    this.option = option;
  }
}
