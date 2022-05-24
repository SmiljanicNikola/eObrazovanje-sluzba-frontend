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
    this.router.navigate(['updateLecturer', id]);
  }

  public lecturerDetails(id:number){
    let response = this.lecturerService.getLecturerById(id);
    response.subscribe((lecturer)=> this.lecturer = lecturer)
    console.log(this.lecturer);
    this.router.navigate(['lectuerDetails', id]);
  }

  public deleteLecturer(id:number) {
    console.log(id);
    this.lecturerService.deleteLecturer(id);
  }

  redurectToListOfAllLecturers(){
    this.router.navigate(['/lecturers']);
  }
  addLecturer(){
    this.lecturerService.addLecturer(this.lecturer).subscribe(data=>{
      console.log(data);
      this.lecturer = new Lecturer();
      console.log(this.lecturer);
      this.redurectToListOfAllLecturers();
    },
    error=>console.log(error));
  }
  onSubmit(){
    this.addLecturer();
  }

}