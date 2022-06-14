import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Departments } from 'src/app/models/Departments';
import { Semester } from 'src/app/models/Semester';
import { Subject } from 'src/app/models/Subject';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { SemesterService } from 'src/app/services/semesters/semester.service';
import { SubjectService } from 'src/app/services/subjects/subject.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.component.html',
  styleUrls: ['./create-subject.component.css']
})
export class CreateSubjectComponent implements OnInit {

  id:number;
  option: any;
  subject: Subject;

  semesters$ : Observable<Semester[]>;

  constructor(private route: ActivatedRoute, private router: Router, private semestersService: SemesterService, private subjectService: SubjectService) { }

  ngOnInit(): void {
    this.subject = new Subject();
    this.semesters$ = this.semestersService.getSemesters();
  }
  redirectToListOfAllSubjects(){
    this.router.navigate(['/subjects']);
  }

  createSubject(){
    this.subjectService.createSubject(this.subject).subscribe(data=>{
      console.log(this.option);
      this.subject = new Subject();
      this.redirectToListOfAllSubjects();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.createSubject();
  }

  onChange(option: any) {
    this.option = option;
  }

}
