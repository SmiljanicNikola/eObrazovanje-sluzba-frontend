import { Component, OnInit } from '@angular/core';
import { Lecturer } from 'src/app/interfaces/Lecturer';
import { LecturerService } from 'src/app/services/lecturers/lecturer.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  lecturers: Lecturer[] = [];

  constructor(private lecturerService:LecturerService) { }

  ngOnInit(): void {
    this.lecturerService.getLecturers().subscribe((lecturers) => this.lecturers = lecturers)
  }

}
