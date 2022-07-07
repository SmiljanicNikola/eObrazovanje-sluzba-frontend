import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PreExaminationObligations } from 'src/app/models/PreExaminationObligations';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PreExamObligationService } from 'src/app/services/pre-exam-obligation/pre-exam-obligation.service';

@Component({
  selector: 'app-pre-examination-obligations',
  templateUrl: './pre-examination-obligations.component.html',
  styleUrls: ['./pre-examination-obligations.component.css']
})
export class PreExaminationObligationsComponent implements OnInit {

  preExaminationObligations: PreExaminationObligations[] = [];
  preExamOb: any;
  user: any;
  

  constructor( private authService: AuthService,private preExamObligationSerice: PreExamObligationService, private router: Router) { }


  ngOnInit(): void {
    this.preExamObligationSerice.getPreExamObligation().subscribe((preExaminationObligations) => {console.log(preExaminationObligations); this.preExamOb = preExaminationObligations})
    this.user = this.authService.getToken()
  }

  public updatePreExamObligation(id:number){
    this.router.navigate(['updatePreExamObligation', id]);
  }

  public deletePreExamObligation(id:number){
    let response = this.preExamObligationSerice.deletePreExamObligation(id);
    response.subscribe((preExaminationObligations)=> this.preExamOb = preExaminationObligations);
  }

  public createPreExamObligation(){
    this.router.navigate(['updatePreExamObligation']);
  }
}
