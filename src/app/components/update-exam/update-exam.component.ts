import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ExamDate } from 'src/app/models/ExamDate';
import { TakingExam } from 'src/app/models/TakingExam';
import { TakingExamService } from 'src/app/services/taking-exams/taking-exam.service';

@Component({
  selector: 'app-update-exam',
  templateUrl: './update-exam.component.html',
  styleUrls: ['./update-exam.component.css']
})
export class UpdateExamComponent implements OnInit {

  id:number;
  takingExam:TakingExam;

  constructor(private route: ActivatedRoute, private router: Router, private takingExamService: TakingExamService) { }

  ngOnInit(): void {

    this.takingExam = new TakingExam();

    this.id = this.route.snapshot.params['id'];

    this.takingExamService.getTakingExamById(this.id).subscribe(data=>{
      console.log(data)
      this.takingExam = data
    }, error=> console.log(error));
  }

  redirectToListOfAllExams(){
    this.router.navigate(['/lecturersTakedExam']);
  }

  onSubmit(){
    //this.rateExam(this.takingExam.taking_exam_id,this.takingExam)
  }

  rateExam(id:number, takingExam:TakingExam){

    if(takingExam.grade > 5){
      takingExam.passed = true;
    }

    let obj:TakingExam = {
      taking_exam_id: this.takingExam.taking_exam_id,
      grade:this.takingExam.grade,
      passed:this.takingExam.passed,
      lecturer:this.takingExam.lecturer,
      attendingCourses:this.takingExam.attendingCourses,
      deleted:false
    }
    console.log(id);
    console.log('Novi objekat'+obj.grade)

    this.takingExamService.updateTakingExam(id,takingExam).subscribe(data=>{
      this.takingExam = data;
      this.redirectToListOfAllExams();
    }, error=>console.log(error));
  }

}
