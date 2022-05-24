import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admins/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admins: Admin[] = [];
  admin: any;


  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit(): void {
    this.adminService.getAdmin().subscribe((admins) => this.admins = admins)
  }

  public updateAdmin(id:number){
    this.router.navigate(['updateAdmin', id]);
  }


}
