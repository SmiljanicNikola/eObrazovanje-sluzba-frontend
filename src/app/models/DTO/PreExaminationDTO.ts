import { PreExaminationObligations } from "../PreExaminationObligations";

export class PreExaminationDTO{
    pre_examination_obligation_id : number;
    subjectId:number;
    mandatory: boolean;
    points:number;
    examDateId:number;
    subjectPerformanceId:number;
    typeOfRequirementId:number;
    deleted:boolean;

    constructor(preExamObli? : PreExaminationObligations){
        if(preExamObli){
        this.pre_examination_obligation_id = preExamObli.pre_examination_obligation_id;
        this.subjectId = preExamObli.subject?.id;
        this.mandatory = preExamObli.mandatory;
        this.points = preExamObli.points;
        this.examDateId = preExamObli.examDate?.id;
        this.subjectPerformanceId = preExamObli.subjectPerformance?.subject_performance_id;
        this.typeOfRequirementId = preExamObli.typeOfRequirement?.id;
        this.deleted = preExamObli.deleted;
        }
    }
}