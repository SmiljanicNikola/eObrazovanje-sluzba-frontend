import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LecturerDTO } from 'src/app/models/DTO/LecturerDTO';
import { Lecturer } from 'src/app/models/Lecturer';
import { LecturerService } from 'src/app/services/lecturers/lecturer.service';

@Component({
  selector: 'app-update-lecturer',
  templateUrl: './update-lecturer.component.html',
  styleUrls: ['./update-lecturer.component.css']
})
export class UpdateLecturerComponent implements OnInit {

  id:number;
  lecturer: LecturerDTO;

  constructor(private route: ActivatedRoute, private router: Router, private lecturerService: LecturerService) { }

  ngOnInit(): void {
    this.lecturer = new LecturerDTO();

    this.id = this.route.snapshot.params['id'];

    this.lecturerService.getLecturerById(this.id).subscribe(data=>{
      console.log(data)
      this.lecturer = new LecturerDTO(data);
    }, error=> console.log(error));
  }
  updateLecturer(){
    this.lecturerService.updateLecturer(this.lecturer).subscribe(data=>{
      console.log(data);
      this.lecturer = new LecturerDTO();
      this.redirectToListOfAllLecturers();
    }, error=>console.log(error));
  }
  onSubmit(){
    this.updateLecturer();
  }

  redirectToListOfAllLecturers(){
    this.router.navigate(['/lecturers']);
  }
}
