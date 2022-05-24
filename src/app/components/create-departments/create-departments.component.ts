import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departments } from 'src/app/models/Departments';
import { DepartmentsService } from 'src/app/services/departments/departments.service';

@Component({
  selector: 'app-create-departments',
  templateUrl: './create-departments.component.html',
  styleUrls: ['./create-departments.component.css']
})
export class CreateDepartmentsComponent implements OnInit {

  id:number;
  departments: Departments;

  constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.departments = new Departments();
  }
  redirectToListOfAllDepartments(){
    this.router.navigate(['/departments']);
  }

  createDepartment(){
    this.departmentService.createDepartment(this.departments).subscribe(data=>{
      console.log(data);
      this.departments = new Departments();
      console.log(this.departments);
      this.redirectToListOfAllDepartments();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.createDepartment();
  }

 

}
