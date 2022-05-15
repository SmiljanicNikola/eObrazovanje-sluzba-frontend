import { AttendingCourse } from "./AttendingCourse";
import { Lecturer } from "./Lecturer";

export class TakingExam {
    taking_exam_id: number;
    grade:number;
    passed:boolean;
    deleted:boolean;
    lecturer:Lecturer;
    attendingCourses:AttendingCourse;
    
  }