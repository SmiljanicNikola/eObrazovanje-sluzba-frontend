import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendingCourse } from 'src/app/models/AttendingCourse';
import { AttendingCousreService } from 'src/app/services/attendingCourse/attending-cousre.service';

@Component({
  selector: 'app-attending-course',
  templateUrl: './attending-course.component.html',
  styleUrls: ['./attending-course.component.css']
})
export class AttendingCourseComponent implements OnInit {

  attending: AttendingCourse[] = [];
  course: any;


  constructor(private attendingService: AttendingCousreService, private router: Router) { }


  ngOnInit(): void {
    this.attendingService.getAttendingCourse().subscribe((attending) => this.attending = attending)
  }

  public addStudent() {
    this.router.navigate(['subject-performance']);
  }
}
