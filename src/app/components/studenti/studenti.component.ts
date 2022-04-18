import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

export class Student{
  constructor(
    public username:string,
    public lastname: string
  ){}
}

var token = localStorage.getItem("user");
//const token = JSON.parse(localStorage.getItem("user")).token

var headers_object = new HttpHeaders();
  headers_object.append('Content-Type', 'application/json');
  headers_object.append("Authorization", "Bearer" + token);

const httpOptions = {
  headers: headers_object
};

@Component({
  selector: 'app-studenti',
  templateUrl: './studenti.component.html',
  styleUrls: ['./studenti.component.css']
})
export class StudentiComponent implements OnInit {

  student: Student[];

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getStudent();
    console.log("Test")
  }

  getStudent(){
    this.httpClient.get<any>('http://localhost:8080/api/students', httpOptions).subscribe(
      response =>{
        console.log('Evo ga'+response);
        this.student = response;
      }
    )
  };
  

}
