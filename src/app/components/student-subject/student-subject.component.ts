import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from 'src/app/services/student/student.service';
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
  studentsCopy:Student[] = [];
  student: any;
  attendingCourses: AttendingCourse[] = [];
  attendingCourse: any;
  subjectPerformance: SubjectPerformance[] = [];
  lecturer: any;
  subjectPerformanceId: number;

  constructor(private route: ActivatedRoute, private studentService: StudentService,private attendingCourseService: AttendingCousreService) { }


  ngOnInit(): void {
    this.subjectPerformanceId = this.route.snapshot.params['id'];

    this.attendingCourse = {subjectPerformance: this.subjectPerformanceId, student:0};

    this.attendingCourseService.getStudensForPerformance(this.subjectPerformanceId).subscribe((student) => { 
    this.studentsCopy = student;
    this.students = student;
    });
    
  }
  
  searchStudents(event: any) {  
    const searchValue = event.target.value;
    if(searchValue && searchValue !== "") {
      this.studentsCopy = this.studentsCopy.filter(s => s.firstname.toLowerCase().includes(searchValue) || 
      s.lastname.toLowerCase().includes(searchValue))
    } else{
      this.studentsCopy = this.students;
    }
  }
  createAttendingCourse(id:number){
      this.attendingCourse.student = id;
      this.attendingCourseService.createAttendingCourse(this.attendingCourse).subscribe(data=>{
      let student = this.studentsCopy.find(s => s.student_id == id);
      if(student){
        let index = this.studentsCopy.indexOf(student);
        this.studentsCopy.splice(index,1);
      }
      this.attendingCourse = {subjectPerformance: this.subjectPerformanceId, student:0};
      
    },
    error=>console.log(error));
  }




}

