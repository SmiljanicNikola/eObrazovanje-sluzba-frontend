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

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'studenti', component: StudentiComponent },
  { path: 'lecturers', component: LecturersComponent },
  { path : 'subjects', component: SubjectsComponent },
  { path: 'semesters', component: SemesterComponent },
  {path: 'payments', component: PaymentsComponent},
  {path: 'studentDetails/:id', component: StudentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
