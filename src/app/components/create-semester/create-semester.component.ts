import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departments } from 'src/app/models/Departments';
import { Semester } from 'src/app/models/Semester';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { SemesterService } from 'src/app/services/semesters/semester.service';

@Component({
  selector: 'app-create-semesters',
  templateUrl: './create-semester.component.html',
  styleUrls: ['./create-semester.component.css']
})
export class CreateSemestersComponent implements OnInit {

  id:number;
  departments: Departments;
  semesters: Semester;

  departments$ : Observable<Departments[]>;

  constructor(private route: ActivatedRoute, private router: Router, private semestersService: SemesterService, private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.semesters = new Semester();
    this.departments$ = this.departmentService.getDepartments();
  }
  redirectToListOfAllSemesters(){
    this.router.navigate(['/semesters']);
  }

  createSemester(){
    this.semestersService.createSemester(this.semesters).subscribe(data=>{
      console.log(data.department);
      this.semesters = new Semester();
      this.redirectToListOfAllSemesters();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.createSemester();
  }

 

}
