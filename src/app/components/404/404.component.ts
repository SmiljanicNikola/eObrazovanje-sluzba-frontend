import { Component, OnInit } from '@angular/core';
import { Departments } from 'src/app/models/Departments';
import { DepartmentsService } from 'src/app/services/departments/departments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-404',
  templateUrl: './404.component.html',
  styleUrls: ['./404.component.css']
})
export class ErrorPageComponent implements OnInit {
    errorImage: string = "assets/images/404page.png";
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
}
