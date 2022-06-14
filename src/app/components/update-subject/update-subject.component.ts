import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departments } from 'src/app/models/Departments';
import { Semester } from 'src/app/models/Semester';
import { Subject } from 'src/app/models/Subject';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { SemesterService } from 'src/app/services/semesters/semester.service';
import { SubjectService } from 'src/app/services/subjects/subject.service';

@Component({
  selector: 'app-update-subject',
  templateUrl: './update-subject.component.html',
  styleUrls: ['./update-subject.component.css']
})
export class UpdateSubjectComponent implements OnInit {

  id:number;
  subject: Subject;
  semesters$ : Observable<Semester[]>;
  option:any;

  constructor(private route: ActivatedRoute, private router: Router, private semesterService: SemesterService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subject = new Subject();
    this.semesters$ = this.semesterService.getSemesters();
    this.id = this.route.snapshot.params['id'];

    this.subjectService.getSubjectById(this.id).subscribe(data=>{
      this.subject = data
    }, error => console.log(error));
  }
  redirectToListOfAllSubjects(){
    this.router.navigate(['/subjects']);
  }

  onChange(option: any) {
    this.option = option;
  }

  updateSubject(){
    this.subjectService.updateSubject(this.id, this.subject).subscribe(data=>{
      console.log(data);
      this.subject = new Subject();
      this.redirectToListOfAllSubjects();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.updateSubject();
  }

 

}
