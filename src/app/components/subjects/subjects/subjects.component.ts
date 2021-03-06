import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'src/app/models/Subject';
import { SubjectService } from 'src/app/services/subjects/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectService: SubjectService, private router: Router) { }

  ngOnInit(): void {
    this.subjectService.getSubjcts().subscribe((subjects) => this.subjects = subjects)
  }

  public updateSubject(id:number){
    this.router.navigate(['updateSubject', id]);
  }

  public createSubject() {
    this.router.navigate(['createSubject']);
  }

}