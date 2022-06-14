import { Account } from "./Account";

export class Payment{
    id:number;
    purposeOfPayment: string;
    amount: number;
    dateOfPayment: Date;
    account: Account;
}