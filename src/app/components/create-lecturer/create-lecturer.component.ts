import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Lecturer } from 'src/app/models/Lecturer';
import { LecturerService } from 'src/app/services/lecturers/lecturer.service';

@Component({
  selector: 'app-create-lecturer',
  templateUrl: './create-lecturer.component.html',
  styleUrls: ['./create-lecturer.component.css']
})
export class CreateLecturerComponent implements OnInit {

  id:number;
  lecturer: Lecturer;
  constructor(private route: ActivatedRoute, private router: Router, private lecturerService: LecturerService ) { }

  ngOnInit(): void {
    this.lecturer = new Lecturer();
  }

  redirectToListOfAllLecturers(){
    this.router.navigate(['/lecturers']);
  }
  createLecturer(){
    this.lecturerService.createLecturer(this.lecturer).subscribe(data=>{
      console.log(data);
      this.lecturer = new Lecturer();
      console.log(this.lecturer);
      this.redirectToListOfAllLecturers();
    },
    error=>console.log(error));
  }
  onSubmit(){
    this.createLecturer();
  }

}
