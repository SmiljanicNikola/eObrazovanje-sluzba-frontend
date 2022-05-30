import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admins/admin.service';

@Component({
  selector: 'app-create-admin',
  templateUrl: './create-admin.component.html',
  styleUrls: ['./create-admin.component.css']
})
export class CreateAdminComponent implements OnInit {

  id:number;
  admin: Admin;
  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService ) { }

  ngOnInit(): void {
    this.admin = new Admin();
  }

  redirectToListOfAllStudents(){
    this.router.navigate(['/studenti']);
  }
  createAdmin(){
    this.adminService.createAdmin(this.admin).subscribe(data=>{
      console.log(data);
      this.admin = new Admin();
      console.log(this.admin);
      this.redirectToListOfAllStudents();
    },
    error=>console.log(error));
  }
  onSubmit(){
    this.createAdmin();
  }

}
