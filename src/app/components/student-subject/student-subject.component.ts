import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';
import { LecturerService } from 'src/app/services/lecturers/lecturer.service';
import { AttendingCourse } from 'src/app/models/AttendingCourse';
import { SubjectPerformance } from 'src/app/models/SubjectPerformance';
import { Student } from 'src/app/models/Student';
import { SubjectPerformanceService } from 'src/app/services/subject-performance/subject-performance.service';
import { AttendingCousreService } from 'src/app/services/attendingCourse/attending-cousre.service';

@Component({
  selector: 'app-student-subject',
  templateUrl: './student-subject.component.html',
  styleUrls: ['./student-subject.component.css']
})
export class StudentSubjectComponent implements OnInit {
  students:Student[] = [];
  student: any;
  attendingCourses: AttendingCourse[] = [];
  attendingCourse: any;
  subjectPerformance: SubjectPerformance[] = [];
  lecturer: any;

  constructor(private studentService: StudentService,private attendingCourseService: AttendingCousreService, private subjectPerformanceService: SubjectPerformanceService, private router: Router) { }


  ngOnInit(): void {
    this.studentService.getStudents().subscribe((student) => this.students = student);
  }
  
  createAttendingCourse(){
    this.attendingCourseService.createAttendingCourse(this.attendingCourse).subscribe(data=>{
      console.log(data);
      this.attendingCourse = new AttendingCourse();
      console.log(this.attendingCourse);
    },
    error=>console.log(error));
  }
  onSubmit(){
    this.createAttendingCourse();
  }
}

