import { Component, OnInit } from '@angular/core';
import { Subject } from 'src/app/interfaces/Subject';
import { SubjectService } from 'src/app/services/subjects/subject.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectsComponent implements OnInit {
  subjects: Subject[] = [];

  constructor(private subjectService:SubjectService) { }

  ngOnInit(): void {
    this.subjectService.getSubjcts().subscribe((subjects) => this.subjects = subjects)
  }

}