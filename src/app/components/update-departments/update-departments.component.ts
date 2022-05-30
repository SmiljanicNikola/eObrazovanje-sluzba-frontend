import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Departments } from 'src/app/models/Departments';
import { DepartmentsService } from 'src/app/services/departments/departments.service';

@Component({
  selector: 'app-update-departments',
  templateUrl: './update-departments.component.html',
  styleUrls: ['./update-departments.component.css']
})
export class UpdateDepartmentsComponent implements OnInit {

  id:number;
  departments: Departments;

  constructor(private route: ActivatedRoute, private router: Router, private departmentService: DepartmentsService) { }

  ngOnInit(): void {
    this.departments = new Departments();

    this.id = this.route.snapshot.params['id'];

    this.departmentService.getDepartmentById(this.id).subscribe(data=>{
      console.log(data)
      this.departments = data
    }, error => console.log(error));
  }
  redirectToListOfAllDepartments(){
    this.router.navigate(['/departments']);
  }

  updateDepartment(){
    this.departmentService.updateDepartment(this.id, this.departments).subscribe(data=>{
      console.log(data);
      this.departments = new Departments();
      this.redirectToListOfAllDepartments();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.updateDepartment();
  }

 

}
