import { TakingExam } from "./TakingExam";

export class ExamDate {
    id: number;
    date: Date;
    name: string;
    takingExam: TakingExam;
    deleted: boolean;
}