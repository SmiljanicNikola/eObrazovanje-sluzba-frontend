import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/Departments';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentComponent implements OnInit {

  departments:Departments[] = [];

  constructor(private departmentService: DepartmentsService, private router: Router) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().subscribe((departments) => {this.departments = departments; console.log(departments[0])})
  }

  public updateDepartment(id:number){
    this.router.navigate(['updateDepartment', id]);
  }

  public createDepartment() {
    this.router.navigate(['createDepartment']);
  }

  public blockDepartment(id:number) {
    console.log(id);
    let response = this.departmentService.blockDepartment(id);
    response.subscribe((departments)=> this.departments = departments)
  }

}
