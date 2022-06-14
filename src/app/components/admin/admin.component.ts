import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/Admin';
import { AdminService } from 'src/app/services/admins/admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { Pipe, PipeTransform } from '@angular/core';

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
  admins: any[] = [];
  admin: any;
  user: any;

  constructor(private adminService: AdminService, private router: Router) { }


  ngOnInit(): void {
    this.adminService.getAdmin().subscribe((admins) => this.admins = admins)
  }

  public createAdmin() {
    this.router.navigate(['addAdmin']);
  }

}
