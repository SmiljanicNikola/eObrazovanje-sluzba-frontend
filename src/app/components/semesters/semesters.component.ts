import { Component, OnInit } from '@angular/core';
import { SemesterService } from 'src/app/services/semesters/semester.service';
import { Semester } from 'src/app/models/Semester';
import { Router } from '@angular/router';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemesterComponent implements OnInit {

  semesters:Semester[] = [];

  constructor(private semesterService: SemesterService, private router: Router) { }

  ngOnInit(): void {
    this.semesterService.getSemesters().subscribe((semesters) => {this.semesters = semesters; console.log(semesters[0])})
  }

  public updateSemester(id:number){
    this.router.navigate(['updateSemester', id]);
  }

  public createSemester() {
    this.router.navigate(['createSemester']);
  }

}
