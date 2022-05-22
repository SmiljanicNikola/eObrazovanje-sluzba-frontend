import { AttendingCourse } from "./AttendingCourse";
import { Lecturer } from "./Lecturer";

export interface TakingExamm {
  grade:number,
  passed:boolean,
  lecturerId:number,
  attendingCoursesId:number,
  deleted:boolean,
  examDateId:number;
}

export class TakingExam {
    taking_exam_id: number;
    grade:number;
    passed:boolean;
    deleted:boolean;
    lecturer:Lecturer;
    attendingCourses:AttendingCourse;
    
  }

  export class TakingExam2 {
    grade:number;
    passed:boolean;
    lecturer:Lecturer;
    attendingCourses:AttendingCourse;
    deleted:boolean;
    
  }

  export class TakingExamRequest {
    grade:number;
    passed:boolean;
    lecturerId:number;
    attendingCoursesId:number;
    deleted:boolean;
    
  }