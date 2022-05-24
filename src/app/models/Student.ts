import { StudentHistory } from "./StudentHistory";

export class Student {
    student_id: number;
    username: string;
    firstname: string;
    lastname: string;
    indexNumber: string;
    jmbg: string;
    adress: string;
    blocked:boolean;
    accountId:number;
    studentHistory:StudentHistory;
  }