import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminDTO } from 'src/app/models/DTO/AdminDTO';
import { AdminService } from 'src/app/services/admins/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  id:number;
  admin: AdminDTO;

  constructor(private route: ActivatedRoute, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.admin = new AdminDTO();

    this.id = this.route.snapshot.params['id'];

    this.adminService.getAdminById(this.id).subscribe(data=>{
      console.log(data)
      this.admin = new AdminDTO(data);
    }, error=> console.log(error));
  }
  updateAdmin(){
    this.adminService.updateAdmin(this.admin).subscribe(data=>{
      console.log(data);
      this.admin = new AdminDTO();
      this.redirectToListOfAllLecturers();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.updateAdmin();
  }

  redirectToListOfAllLecturers(){
    this.router.navigate(['/admins']);
  }
}
