import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Departments } from 'src/app/models/Departments';
import { Semester } from 'src/app/models/Semester';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { SemesterService } from 'src/app/services/semesters/semester.service';

@Component({
  selector: 'app-update-update',
  templateUrl: './update-semester.component.html',
  styleUrls: ['./update-semester.component.css']
})
export class UpdateSemesterComponent implements OnInit {

  id:number;
  semester: Semester;
  departments$ : Observable<Departments[]>;

  constructor(private route: ActivatedRoute, private router: Router, private semesterService: SemesterService, private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.semester = new Semester();
    this.departments$ = this.departmentService.getDepartments();
    this.id = this.route.snapshot.params['id'];

    this.semesterService.getSemesterById(this.id).subscribe(data=>{
      console.log(data)
      this.semester = data
    }, error => console.log(error));
  }
  redirectToListOfAllSemesters(){
    this.router.navigate(['/semesters']);
  }

  updateDepartment(){
    this.semesterService.updateSemester(this.id, this.semester).subscribe(data=>{
      console.log(data);
      this.semester = new Semester();
      this.redirectToListOfAllSemesters();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.updateDepartment();
  }

 

}
