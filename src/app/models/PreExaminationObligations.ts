import { ExamDate } from "./ExamDate";
import { Subject } from "./Subject";
import { SubjectPerformance } from "./SubjectPerformance";
import { TypeOfRequirement } from "./TypeOfRequirement";

export class PreExaminationObligations {
    pre_examination_obligation_id: number;
    subject: Subject;
    mandatory: boolean;
    points: number;
    examDate: ExamDate;
    subjectPerformance: SubjectPerformance;
    typeOfRequirement: TypeOfRequirement;
    deleted: boolean;
  }