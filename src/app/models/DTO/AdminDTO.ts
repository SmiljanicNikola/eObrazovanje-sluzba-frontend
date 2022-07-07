import { Admin } from "../Admin";

export class AdminDTO{
    id:number;
    username: string;
    name: string;
    surname: string;
    address: string;
    password: string;
    jmbg: string;
    blocked:boolean;
  
      constructor(admin? : Admin){
          if(admin){
          this.id = admin.id;
          this.username = admin.username;
          this.name = admin.name;
          this.surname = admin.surname;
          this.address = admin.address;
          this.password = admin.password;
          this.jmbg = admin.jmbg;
          this.blocked = admin.blocked;
          }
      }
      
  
  }