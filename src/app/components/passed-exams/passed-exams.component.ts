import { Component, OnInit } from '@angular/core';
import {ExamsService} from '../../services/exams/exams.service'

@Component({
  selector: 'app-passed-exams',
  templateUrl: './passed-exams.component.html',
  styleUrls: ['./passed-exams.component.css']
})
export class PassedExamsComponent implements OnInit {
  exams: any[] = [];
  username:String;

  constructor(private examsService:ExamsService) { }

  ngOnInit(): void {
    const {username} = JSON.parse(localStorage.getItem('user') || '{}')
    this.username = username;
    this.examsService.getExams(username).subscribe((exams) => this.exams = exams)
    
  }
  
  public studentExams(username:string){
    console.log(username);

  }

}
