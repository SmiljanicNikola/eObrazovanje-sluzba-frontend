import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lecturer } from 'src/app/models/Lecturer';
import { AuthService } from 'src/app/services/auth/auth.service';
import { LecturerService } from 'src/app/services/lecturers/lecturer.service';
import { TakingExamService } from 'src/app/services/taking-exams/taking-exam.service';

@Component({
  selector: 'app-lecturers-exams',
  templateUrl: './lecturers-exams.component.html',
  styleUrls: ['./lecturers-exams.component.css']
})
export class LecturersExamsComponent implements OnInit {

  username: string;
  lecturer: any;
  takenExams: any[] = [];

  constructor(
      private route: ActivatedRoute,
      private router:Router,
      private authService: AuthService,
      private takingExamService: TakingExamService,
      private lecturerService: LecturerService
      ) { }

  ngOnInit(): void {

    this.takingExamService.getTakingExams().subscribe((exams) => this.takenExams = exams)

    const { username } = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = username;
    console.log(username);

    //lecturer: this.lecturerService.getLecturerByUsername(username);
    this.lecturerService.getLecturerByUsername(username).subscribe((lecturer) => this.lecturer = lecturer);
    console.log(this.lecturer);

    //ISPRAVNO this.lecturerService.getLecturerByUsername(username).subscribe((value)=>console.log(value));
  }

  public updateExam(id:number){
    console.log(id);
    this.router.navigate(['updateExam', id]);
  }

}
