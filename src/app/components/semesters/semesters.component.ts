import { Component, OnInit } from '@angular/core';
import { SemesterService } from 'src/app/services/semesters/semester.service';
import { Semester } from 'src/app/models/Semester';

@Component({
  selector: 'app-semesters',
  templateUrl: './semesters.component.html',
  styleUrls: ['./semesters.component.css']
})
export class SemesterComponent implements OnInit {

  semesters:Semester[] = [];

  constructor(private semesterService: SemesterService) { }

  ngOnInit(): void {
    this.semesterService.getSemesters().subscribe((semesters) => {this.semesters = semesters; console.log(semesters[0])})
  }

}
