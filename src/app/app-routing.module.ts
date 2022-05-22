import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {AppComponent} from './app.component'
import { StudentiComponent } from './components/studenti/studenti.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
import { SubjectsComponent } from './components/subjects/subjects/subjects.component';
import { SemesterComponent } from './components/semesters/semesters.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { BankAccountDetailsComponent } from './components/bank-account-details/bank-account-details.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { ExamDatesComponent } from './components/exam-dates/exam-dates.component';
import { HomeComponent } from './components/home/home.component';
import { LecturersExamsComponent } from './components/lecturers-exams/lecturers-exams.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'studenti', component: StudentiComponent },
  { path: 'lecturers', component: LecturersComponent },
  { path : 'subjects', component: SubjectsComponent },
  { path: 'semesters', component: SemesterComponent },
  {path: 'payments', component: PaymentsComponent},
  {path: 'studentDetails/:id', component: StudentDetailsComponent},
  {path: 'updateStudent/:id', component: UpdateStudentComponent},
  {path: 'bankAccountDetails/:id', component: BankAccountDetailsComponent},
  {path: 'paymentHistory/:id', component: PaymentHistoryComponent},
  { path: 'examDates', component: ExamDatesComponent },
  {path: 'home', component: HomeComponent},
  {path: 'lecturersTakedExam', component:LecturersExamsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
