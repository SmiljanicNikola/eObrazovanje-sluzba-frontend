import { Lecturer } from "../Lecturer";
export class LecturerDTO{
  id:number;
  username: string;
  password: string;
  firstname: string;
  lastname: string;
  jmbg: string;
  adress: string;
  pay:number;
  blocked:boolean;

    constructor(lecturer? : Lecturer){
        if(lecturer){
        this.id = lecturer.lecturer_Id;
        this.username = lecturer.username;
        this.password = lecturer.password;
        this.firstname = lecturer.name;
        this.lastname = lecturer.surname;
        this.adress = lecturer.address;
        this.pay = lecturer.pay;
        this.jmbg = lecturer.jmbg;
        this.blocked = lecturer.blocked;
        }
    }
    

}
