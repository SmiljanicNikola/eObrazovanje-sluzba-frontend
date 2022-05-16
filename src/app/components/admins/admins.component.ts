import { Component, OnInit } from '@angular/core';
import { Admin } from "src/app/models/Admin"
import { AdminService } from 'src/app/services/admins/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  admins: Admin[] = [];

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getAdmins().subscribe((admins) => this.admins = admins)
  }

}

