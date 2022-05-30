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
import { UpdateExamComponent } from './components/update-exam/update-exam.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateLecturerComponent } from './components/create-lecturer/create-lecturer.component';
import { UpdateLecturerComponent } from './components/update-lecturer/update-lecturer.component';
import { AdminComponent } from './components/admin/admin.component';
import { DepartmentComponent } from './components/departments/departments.component';
import { UpdateDepartmentsComponent } from './components/update-departments/update-departments.component';
import { CreateDepartmentsComponent } from './components/create-departments/create-departments.component';
<<<<<<< HEAD
import { CreateExamDateComponent } from './components/create-exam-date/create-exam-date.component';
=======
import { SubjectPerformanceComponent } from './components/subject-performance/subject-performance.component';
import { StudentSubjectComponent } from './components/student-subject/student-subject.component';
>>>>>>> 8ad49dbc60ace1c6b27af7901513e5b2a6e95d73

const routes: Routes = [
  {path: '',pathMatch:'full', redirectTo:'login'},
  {path: 'login', component: LoginComponent },
  {path: 'studenti', component: StudentiComponent },
  {path: 'updateStudent', component: UpdateStudentComponent},
  {path: 'subject-performance', component:SubjectPerformanceComponent},
  {path: 'choseStudent/:id', component:StudentSubjectComponent},
  {path: 'admins', component: AdminComponent},
  {path: 'addAdmin', component: CreateAdminComponent},
  {path: 'addStudent', component: CreateStudentsComponent},
  {path: 'lecturers', component: LecturersComponent},
  {path: 'addLecturer', component: CreateLecturerComponent},
  {path: 'updateLecturer/:id', component: UpdateLecturerComponent},
  {path: 'subjects', component: SubjectsComponent},
  {path: 'semesters', component: SemesterComponent},
  {path: 'payments', component: PaymentsComponent},
  {path: 'studentDetails/:id', component: StudentDetailsComponent},
  {path: 'updateStudent/:id', component: UpdateStudentComponent},
  {path: 'bankAccountDetails/:id', component: BankAccountDetailsComponent},
  {path: 'paymentHistory/:id', component: PaymentHistoryComponent},
  {path: 'examDates', component: ExamDatesComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lecturersTakenExam', component:LecturersExamsComponent},
  {path: 'updateExam/:id', component: UpdateExamComponent},
  {path: 'departments', component: DepartmentComponent},
  {path: 'updateDepartment/:id', component: UpdateDepartmentsComponent},
  {path: 'createDepartment', component: CreateDepartmentsComponent},
  {path: 'changePassword/:id', component: ChangePasswordComponent},
  {path: 'updateProfile/:id', component: UpdateProfileComponent},
  {path: 'addExamDate', component: CreateExamDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
