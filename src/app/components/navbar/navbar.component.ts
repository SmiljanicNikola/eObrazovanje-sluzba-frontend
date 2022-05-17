import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any;


  constructor(private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {

    this.user = this.authService.getToken()


  }

  logout(){
    this.authService.logout();
  }

}
