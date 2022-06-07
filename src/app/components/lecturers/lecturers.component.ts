import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lecturer } from 'src/app/models/Lecturer';
import { LecturerService } from 'src/app/services/lecturers/lecturer.service';

@Component({
  selector: 'app-lecturers',
  templateUrl: './lecturers.component.html',
  styleUrls: ['./lecturers.component.css']
})
export class LecturersComponent implements OnInit {
  lecturers: Lecturer[] = [];
  lecturer: any;

  constructor(private lecturerService:LecturerService,private router : Router) { }

  ngOnInit(): void {
    this.lecturerService.getLecturers().subscribe((lecturers) => this.lecturers = lecturers)
  }

  public updateLecturer(id:number){
    this.router.navigate(["updateLecturer", id]);
  }
  
  public createLecturer() {
    this.router.navigate(['addLecturer']);
  }

  public deleteLecturer(id:number){
    let response = this.lecturerService.deleteLecturer(id);
    response.subscribe((lecturers)=> this.lecturer = lecturers);
  }

}