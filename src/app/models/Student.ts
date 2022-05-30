import { Account } from "./Account";
import { StudentHistory } from "./StudentHistory";

export class Student {
    student_id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    indexNumber: string;
    jmbg: string;
    adress: string;
    blocked:boolean;
    accountId:number;
    studentHistory:StudentHistory;
  }

  
export class Student2 {
  student_id: number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  indexNumber: string;
  jmbg: string;
  adress: string;
  blocked:boolean;
  account:Account;
  studentHistory:StudentHistory;
}

export class StudentForUpdateProfile {
  student_id: number;
  username: string;
  firstname: string;
  lastname: string;
  indexNumber: string;
  jmbg: string;
  adress: string;
}