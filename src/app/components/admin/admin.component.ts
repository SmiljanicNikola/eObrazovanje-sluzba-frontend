import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admins/admin.service';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  @NgModule({
    imports: [
        CommonModule
    ]
})
  admins: Admin[] = [];
  admin: any;


  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((admins) => this.admins = admins)
  }

  public updateAdmin(id:number){
    this.router.navigate(['updateAdmin', id]);
  }

  public adminDelatis(id:number){
    let response = this.adminService.getAdminById(id);
    response.subscribe((admin)=> this.admin = admin)
    console.log(this.admin);
    this.router.navigate(['adminDetails', id]);
  }

}
