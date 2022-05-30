import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectPerformance } from 'src/app/models/SubjectPerformance';
import { SubjectPerformanceService } from 'src/app/services/subject-performance/subject-performance.service';

@Component({
  selector: 'app-subject-performance',
  templateUrl: './subject-performance.component.html',
  styleUrls: ['./subject-performance.component.css']
})
export class SubjectPerformanceComponent implements OnInit {

  subjectPerformances: SubjectPerformance[] = [];
  subjectPerformance: any;

  constructor(private subjectPerformanceService: SubjectPerformanceService, private router: Router) { }

  ngOnInit(): void {
    this.subjectPerformanceService.getSubjectPerfomances().subscribe((subjectPerformance) => this.subjectPerformances = subjectPerformance);
  }

  public choseSubject(id:number){
    let response = this.subjectPerformanceService.getSubjectPerformanceById(id);
    response.subscribe((subjectPerformance)=> this.subjectPerformance = subjectPerformance)
    console.log(this.subjectPerformance);
    this.router.navigate(['choseStudent', id]);
  }

}
