import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { PreExaminationDTO } from 'src/app/models/DTO/PreExaminationDTO';
import { ExamDate } from 'src/app/models/ExamDate';
import { PreExaminationObligations } from 'src/app/models/PreExaminationObligations';
import { Subject } from 'src/app/models/Subject';
import { SubjectPerformance } from 'src/app/models/SubjectPerformance';
import { TypeOfRequirement } from 'src/app/models/TypeOfRequirement';
import { ExamDateService } from 'src/app/services/exam-dates/exam-date.service';
import { PreExamObligationService } from 'src/app/services/pre-exam-obligation/pre-exam-obligation.service';
import { SubjectPerformanceService } from 'src/app/services/subject-performance/subject-performance.service';
import { SubjectService } from 'src/app/services/subjects/subject.service';
import { TypeOfRequirementService } from 'src/app/services/typeOfReq/type-of-requirement.service';

@Component({
  selector: 'app-update-pre-exam-obligatin',
  templateUrl: './update-pre-exam-obligatin.component.html',
  styleUrls: ['./update-pre-exam-obligatin.component.css']
})
export class UpdatePreExamObligatinComponent implements OnInit {

  id:number;
  preExamObligations: PreExaminationDTO;
  isUpdate: boolean;
  subjects : Subject[];
  examDates: ExamDate[];
  subjectPerformances: SubjectPerformance[];
  typeOfRequirements: TypeOfRequirement[];


  constructor(private typeService: TypeOfRequirementService ,private subjecPer: SubjectPerformanceService,private examDateService: ExamDateService,private router: Router,private route: ActivatedRoute,private preExamObliService: PreExamObligationService,private subjectService: SubjectService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isUpdate = this.id?true:false;
    if(this.isUpdate){
      this.preExamObliService.getPreExamObligationById(this.id).subscribe((data) => { 
        this.preExamObligations = new PreExaminationDTO(data);
        }
      );
    }else{
      this.preExamObligations = new PreExaminationDTO();
    }
    this.subjectService.getSubjcts().subscribe((data) =>{
      this.subjects = data;
      });
    this.examDateService.getExamDates().subscribe((data) =>{
        this.examDates = data;
      });
      this.subjecPer.getSubjectPerfomances().subscribe((data) =>{
        this.subjectPerformances = data;
      });
      this.typeService.getAll().subscribe((data) =>{
        this.typeOfRequirements = data;
      });
  }

  onSubmit(){
    if(this.isUpdate){
      this.preExamObliService.updatePreExamObligation(this.preExamObligations).subscribe((data) =>{
        this.preExamObligations = new PreExaminationDTO(data);
        this.router.navigate(['/prexam']);
      })
    }else{
      this.preExamObliService.addPreExamObligation(this.preExamObligations).subscribe((data) =>{
        this.preExamObligations = new PreExaminationDTO(data);
        this.router.navigate(['/prexam']);
      })
    }
  }

}
