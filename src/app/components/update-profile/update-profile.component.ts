import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/users/user.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {

  id:number;
  user: User;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router:Router, private userService: UserService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.userService.getUserById(this.id).subscribe(data=>{
      console.log(data)
      this.user = data
    }, error=> console.log(error));
    
  }

  onSubmit(){
    
  }

}
