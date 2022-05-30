import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { StudentiComponent } from './components/studenti/studenti.component';
import { LecturersComponent } from './components/lecturers/lecturers.component';
import { SubjectsComponent } from './components/subjects/subjects/subjects.component';
import { SemesterComponent } from './components/semesters/semesters.component';
import { UploadUsersComponent } from './components/upload-users/upload-users.component';
import { PreExaminationObligationsComponent } from './components/pre-examination-obligations/pre-examination-obligations.component';
import { PaymentsComponent } from './components/payments/payments.component';
import { StudentDetailsComponent } from './components/student-details/student-details.component';
import { UpdateStudentComponent } from './components/update-student/update-student.component';
import { PassedExamsComponent } from './components/passed-exams/passed-exams.component';
import { BankAccountDetailsComponent } from './components/bank-account-details/bank-account-details.component';
import { PaymentHistoryComponent } from './components/payment-history/payment-history.component';
import { JwtInterceptor } from './services/auth/interceptor.service';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AuthService } from './services/auth/auth.service';
import { ExamDatesComponent } from './components/exam-dates/exam-dates.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/home/home.component';
import { LecturersExamsComponent } from './components/lecturers-exams/lecturers-exams.component';
import { UpdateExamComponent } from './components/update-exam/update-exam.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { UpdateProfileComponent } from './components/update-profile/update-profile.component';
import { CreateStudentsComponent } from './components/create-students/create-students.component';
import { CreateAdminComponent } from './components/create-admin/create-admin.component';
import { CreateLecturerComponent } from './components/create-lecturer/create-lecturer.component';
import { UpdateLecturerComponent } from './components/update-lecturer/update-lecturer.component';
import { StudentSubjectComponent } from './components/student-subject/student-subject.component';
import { SubjectPerformanceComponent } from './components/subject-performance/subject-performance.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    StudentiComponent,
    LecturersComponent,
    SubjectsComponent,
    SemesterComponent,
    UploadUsersComponent,
    PreExaminationObligationsComponent,
    PaymentsComponent,
    StudentDetailsComponent,
    UpdateStudentComponent,
    PassedExamsComponent,
    BankAccountDetailsComponent,
    PaymentHistoryComponent,
    ExamDatesComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LecturersExamsComponent,
    UpdateExamComponent,
    ChangePasswordComponent,
    UpdateProfileComponent,
    CreateStudentsComponent,
    CreateAdminComponent,
    CreateLecturerComponent,
    UpdateLecturerComponent,
    StudentSubjectComponent,
    SubjectPerformanceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
