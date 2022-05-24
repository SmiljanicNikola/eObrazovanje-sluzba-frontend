import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  user:any;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    
  }

}
