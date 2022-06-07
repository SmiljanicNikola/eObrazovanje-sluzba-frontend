import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service'
import { LoginRequest } from 'src/app/models/LoginRequest';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string;
  password:string;
  user: any;
  showErrorMessage: any;

  constructor(private authService:AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("HERE I AM")
    if (!this.username) {
      alert('Please enter a username!');
      return;
    }else if(!this.password){
      alert('Please enter a password!');
      return;
    }

    const object:LoginRequest = {
      username: this.username,
      password: this.password,
    };

    this.authService.login(object).subscribe((value) => {
      this.showErrorMessage = false;
      console.log("TEST: " + JSON.stringify(value));
      if ( value != null ) {
        (localStorage.setItem("user",JSON.stringify(value)));
        this.router.navigate(['home']);
      } else {
        this.showErrorMessage = true;
      }
    });
    this.username = '';
    this.password = '';
  }
}
